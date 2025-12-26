<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'logo',
        'country',
        'industry',
        'address',
        'contact',
        'type',
        'trust_point',
        'review',
        'desc',
        'status',
        'points',
    ];

    public function incrementPoints(int $amount = 1): void
    {
        $this->increment('points', $amount);
    }

    public function scopeActive(Builder $query): void
    {
        $query->where('status', 'active');
    }

    public function scopeInactive(Builder $query): void
    {
        $query->where('status', 'inactive');
    }
}
