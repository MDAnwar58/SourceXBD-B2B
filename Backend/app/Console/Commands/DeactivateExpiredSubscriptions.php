<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\SubscriptionHistory;

class DeactivateExpiredSubscriptions extends Command
{
    protected $signature = 'subscriptions:deactivate';
    protected $description = 'Deactivate products of users with expired subscriptions';

    public function handle()
    {
        $expiredSubscriptions = SubscriptionHistory::where('end_date', '<', now())
            ->where('is_active', true)
            ->get();

        foreach ($expiredSubscriptions as $subscription) {
            $subscription->update(['is_active' => false]);

            // Deactivate products
            $subscription->user->products()->where('status', 'active')->update(['status' => 'inactive']);
        }

        $this->info('Expired subscriptions processed.');
    }
}

