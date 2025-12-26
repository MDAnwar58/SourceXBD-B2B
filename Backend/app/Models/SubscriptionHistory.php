<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subscription_id',
        'start_date',
        'end_date',
        'remaining_products',
        'is_active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
