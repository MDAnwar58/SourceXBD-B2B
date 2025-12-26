<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Subscription extends Model
{

    use HasFactory;

    protected $fillable = [
        'amount',
        'duration',
        'product_limit',
        'desc',
        'is_free'
    ];
    protected $appends = ['is_active_for_user'];

    public function getIsActiveForUserAttribute()
    {
        $user = Auth::user();

        if (!$user) {
            return false;
        }
        return $user->subscriptionHistories()
                    ->where('subscription_id', $this->id)
                    ->where('is_active', true)
                    ->exists();
    }

    // Method to retrieve all subscriptions with the active status for the current user
    public static function getAllSubscriptionsWithActiveStatus()
    {
        return self::all()->map(function ($subscription) {
            $subscription->is_active_for_user = $subscription->is_active_for_user;
            return $subscription;
        });
    }

}
