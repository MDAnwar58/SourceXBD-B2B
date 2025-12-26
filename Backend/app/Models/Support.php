<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Support extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subject',
        'status',
        'answer',
    ];
    protected $appends = ['date'];

    public function getDateAttribute()
    {
        return $this->created_at->format('d-m-Y');
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
