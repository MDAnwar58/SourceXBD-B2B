<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    use HasFactory;
    protected $fillable = [
        'link_1',
        'link_2',
        'link_3',
        'link_4',
        'app_apple',
        'app_google',
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
