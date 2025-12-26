<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Massage extends Model
{
    use HasFactory;
    protected $fillable = ['to_id', 'from_id', 'message', 'reply_id', 'is_read'];
    protected $appends = ['formatted_date'];

    public function toUser()
    {
        return $this->belongsTo(User::class, 'to_id');
    }

    public function fromUser()
    {
        return $this->belongsTo(User::class, 'from_id');
    }

    public function parent()
    {
        return $this->belongsTo(Massage::class, 'reply_id');
    }

    public function replies()
    {
        return $this->hasMany(Massage::class, 'reply_id');
    }

    // Scopes
    public function scopeUnread($query)
    {
        return $query->where('is_read', false);
    }

    // Accessor to format the creation date
    public function getFormattedDateAttribute()
    {
        return $this->created_at->format('d-m-Y H:i:s');
    }
    
}
