<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class City extends Model
{
    use HasFactory;
    protected $fillable = ['name','desc', 'slug','status'];

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }

   
    public function products()
    {
        return $this->hasMany(Product::class);
    }


    public static function boot()
    {
        parent::boot();

        static::creating(function ($category) {
            $category->slug = Str::slug($category->name);
        });

        static::updating(function ($category) {
            $category->slug = Str::slug($category->name);
        });
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
