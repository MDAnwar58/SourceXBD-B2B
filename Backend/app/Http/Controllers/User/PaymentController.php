<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use DGvai\SSLCommerz\SSLCommerz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function showOrderForm($productId)
    {
        $product = Product::findOrFail($productId);
        return view('order.form', compact('product'));
    }

    // Handle order creation
    public function createOrder(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'amount' => 'required|numeric',
            'payment_method' => 'required|in:Pay Now,Cash on Delivery',
            'address' => 'required|string',
            'location_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'author' => 'required|string',
        ]);

        $user = Auth::user();
        $product = Product::findOrFail($request->input('product_id'));

        // Create the order
        $order = Order::create([
            'user_id' => $user->id,
            'product_id' => $product->id,
            'amount' => $request->input('amount'),
            'payment_method' => $request->input('payment_method'),
            'status' => $request->input('payment_method') === 'Pay Now' ? 'Unpaid' : 'Unpaid', // Update later if paid
            'address' => $request->input('address'),
            'location_name' => $request->input('location_name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'author' => $request->input('author'),
        ]);

        // Update product quantity
        $product->decrement('quantity');

        if ($request->input('payment_method') === 'Pay Now') {
            return $this->initiatePayment($order);
        }

        return response()->json(['success' => 'Order created successfully, pay on delivery.']);
    }

    // Initiate payment for an order
    protected function initiatePayment(Order $order)
    {
        $sslcommerz = new SSLCommerz();

        try {
            $response = $sslcommerz->make_payment([
                'total_amount' => $order->amount,
                'currency' => 'BDT',
                'tran_id' => $order->transaction_id ?: uniqid('tran_'),
                'product_category' => 'Product Purchase',
                'product_name' => 'Order Payment',
                'product_profile' => 'Order',
                'return_url' => route('payment.success'),
                'cancel_url' => route('payment.cancel'),
                'fail_url' => route('payment.fail'),
            ]);

            if ($response['status'] === 'success') {
                // Redirect the user to SSLCommerz payment page
                return response()->json(['success' => true, 'redirect_url' => $response['redirect_url']]);
            } else {
                return response()->json(['error' => 'Payment initiation failed.']);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    // Handle payment success
    public function paymentSuccess(Request $request)
    {
        $tranId = $request->input('tran_id');
        $order = Order::where('transaction_id', $tranId)->first();

        if ($order && $order->status === 'Unpaid') {
            $order->update(['status' => 'Paid']);

            return response()->json(['success' => 'Payment completed successfully.']);
        }

        return response()->json(['error' => 'Transaction not found or already paid.']);
    }

    // Handle payment failure
    public function paymentFail(Request $request)
    {
        $tranId = $request->input('tran_id');
        $order = Order::where('transaction_id', $tranId)->first();

        if ($order) {
            $order->update(['status' => 'Canceled']);
            return response()->json(['message' => 'Payment failed']);
        }

        return response()->json(['error' => 'Transaction not found']);
    }

    // Handle payment cancellation
    public function paymentCancel(Request $request)
    {
        $tranId = $request->input('tran_id');
        $order = Order::where('transaction_id', $tranId)->first();

        if ($order) {
            $order->update(['status' => 'Canceled']);
            return response()->json(['message' => 'Payment canceled']);
        }

        return response()->json(['error' => 'Transaction not found']);
    }
}
