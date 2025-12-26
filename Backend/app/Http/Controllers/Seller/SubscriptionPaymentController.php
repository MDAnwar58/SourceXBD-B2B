<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use App\Models\SubscriptionHistory;
use App\Models\SubscriptionOrder;
use Dgvai\SSLCommerz\SSLCommerz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class SubscriptionPaymentController extends Controller
{
    public function initiatePayment(Request $request)
    {
        $user = Auth::user();
        $subscriptionId = $request->input('subscription_id');
        $subscription = Subscription::find($subscriptionId);

        if (!$subscription) {
            return response()->json(['error' => 'Subscription not found.'], 404);
        }

        $transactionId = uniqid('tran_');

        // Create a new SubscriptionOrder
        $order = SubscriptionOrder::create([
            'user_id' => $user->id,
            'transaction_id' => $transactionId,
            'amount' => $subscription->amount,
            'status' => 'Unpaid',
        ]);

        // Prepare data for SSLCommerz payment
        $data = [
            'tran_id' => $transactionId,
            'currency' => 'BDT',
            'total_amount' => $subscription->amount,
            'cus_name' => $user->name,
            'cus_email' => $user->email,
            'cus_phone' => $request->phone,
            'cus_add1' => $request->address,
            'success_url' => route('payment.success'),
            'fail_url' => route('payment.fail'),
            'cancel_url' => route('payment.cancel'),
        ];

        $sslcommerz = new SSLCommerz();
        $paymentOptions = $sslcommerz->initiatePayment($data, 'checkout', 'popup');

        if (!is_array($paymentOptions)) {
            return response()->json(['error' => 'Payment initiation failed']);
        }

        return response()->json($paymentOptions);
    }

    public function paymentSuccess(Request $request)
    {
        $tranId = $request->input('tran_id');
        $order = SubscriptionOrder::where('transaction_id', $tranId)->first();

        if ($order && $order->status === 'Unpaid') {
            $order->update(['status' => 'Paid']);

            // Create subscription history
            $this->createSubscriptionHistory($order->user, $order->amount);

            return response()->json(['success' => 'Payment and subscription processed successfully.']);
        }

        return response()->json(['error' => 'Transaction not found or already paid.']);
    }

    public function paymentFail(Request $request)
    {
        $tranId = $request->input('tran_id');
        $order = SubscriptionOrder::where('transaction_id', $tranId)->first();

        if ($order) {
            $order->update(['status' => 'Canceled']);
            return response()->json(['message' => 'Payment failed']);
        }

        return response()->json(['error' => 'Transaction not found']);
    }

    public function paymentCancel(Request $request)
    {
        $tranId = $request->input('tran_id');
        $order = SubscriptionOrder::where('transaction_id', $tranId)->first();

        if ($order) {
            $order->update(['status' => 'Canceled']);
            return response()->json(['message' => 'Payment canceled']);
        }

        return response()->json(['error' => 'Transaction not found']);
    }

    protected function createSubscriptionHistory($user, $amount)
    {
        $subscription = Subscription::where('amount', $amount)->first();

        if ($subscription) {
            $startDate = now();
            $endDate = $startDate->copy()->addDays($subscription->duration);

            SubscriptionHistory::create([
                'user_id' => $user->id,
                'subscription_id' => $subscription->id,
                'start_date' => $startDate,
                'end_date' => $endDate,
                'remaining_products' => $subscription->product_limit,
                'is_active' => true,
            ]);
        }
    }
}
