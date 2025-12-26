<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'desc'];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
