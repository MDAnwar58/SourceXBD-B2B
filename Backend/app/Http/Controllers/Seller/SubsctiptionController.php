<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Subscription;
use App\Models\SubscriptionHistory;
use App\Models\User;
use DGvai\SSLCommerz\SSLCommerz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubsctiptionController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $subscriptions = Subscription::all()->map(function ($subscription) use ($user) {
            $subscription->is_active_for_user = $subscription->is_active_for_user;

            // Fetch the active subscription history for this subscription and user
            $activeSubscriptionHistory = $user->subscriptionHistories()
                ->where('subscription_id', $subscription->id)
                ->where('is_active', true)
                ->first();

            // Append the end date of the active subscription to the subscription
            $subscription->active_until = $activeSubscriptionHistory ? $activeSubscriptionHistory->end_date : null;

            return $subscription;
        });

        return response()->json($subscriptions);
    }


    // Method to store a new subscription or renew/replace an existing one
    public function store(Request $request)
    {
        $user = Auth::user();
        $newSubscriptionId = $request->input('subscription_id');
        $newSubscription = Subscription::find($newSubscriptionId);

        if (!$newSubscription) {
            return response()->json(['error' => 'Subscription not found.'], 404);
        }

        $paymentStatus = $this->processPayment($newSubscription);

        if (!$paymentStatus['success']) {
            return response()->json(['error' => $paymentStatus['message']], 400);
        }

        // Check if the user has an active subscription
        $currentSubscription = $this->getActiveSubscription($user);

        if ($currentSubscription) {
            if ($currentSubscription->subscription_id == $newSubscription->id) {
                // Renew the existing subscription
                $this->renewSubscription($user, $newSubscription);
            } else {
                // Replace the current subscription with the new one
                $this->replaceSubscription($user, $currentSubscription, $newSubscription);
            }
        } else {
            // Create a new subscription history
            $this->createSubscriptionHistory($user, $newSubscription);
        }

        return response()->json(['success' => 'Subscription processed successfully.']);
    }

    protected function processPayment(Subscription $subscription)
    {
        $sslcommerz = new SSLCommerz();

        try {
            $response = $sslcommerz->createTransaction([
                'total_amount' => $subscription->amount,
                'currency' => 'BDT', // or the currency you are using
                'tran_id' => uniqid(), // Transaction ID
                'product_category' => 'Subscription',
                'product_name' => 'Subscription Payment',
                'product_profile' => 'Subscription',
                'return_url' => route('payment.success'),
                'cancel_url' => route('payment.cancel'),
                'fail_url' => route('payment.fail'),
            ]);

            if ($response['status'] === 'success') {
                // Redirect the user to SSLCommerz payment page
                return ['success' => true, 'message' => $response['redirect_url']];
            } else {
                return ['success' => false, 'message' => 'Payment initiation failed.'];
            }
        } catch (\Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    // Method to create a new subscription history
    protected function createSubscriptionHistory(User $user, Subscription $subscription)
    {
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

    // Method to renew an existing subscription
    protected function renewSubscription(User $user, Subscription $subscription)
    {
        $currentSubscription = $this->getActiveSubscription($user);

        if ($currentSubscription) {
            $daysRemaining = now()->diffInDays($currentSubscription->end_date, false);
            $currentSubscription->update(['is_active' => false]); // Mark old subscription as inactive

            $startDate = now();
            $endDate = $startDate->copy()->addDays($subscription->duration + $daysRemaining);

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

    // Method to replace the current subscription with a new one
    protected function replaceSubscription(User $user, SubscriptionHistory $currentSubscription, Subscription $newSubscription)
    {
        $currentSubscription->update(['is_active' => false]); // Deactivate the current subscription

        // Create a new subscription history with the new subscription
        $this->createSubscriptionHistory($user, $newSubscription);
    }

    // Helper method to get the active subscription for a user
    protected function getActiveSubscription(User $user)
    {
        return $user->subscriptionHistories()->where('is_active', true)
            ->where('end_date', '>=', now())->first();
    }

    // Method to expire subscriptions that have ended
    protected function expireSubscriptions()
    {
        $expiredSubscriptions = SubscriptionHistory::where('end_date', '<', now())
            ->where('is_active', true)
            ->get();

        foreach ($expiredSubscriptions as $subscription) {
            $subscription->update(['is_active' => false]);
            Product::where('user_id', $subscription->user_id)->update(['status' => 'inactive']);
        }
    }
}
