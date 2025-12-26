<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'name', 'slug', 'price', 'stock', 'status', 'rating_point'];

    public function media()
    {
        return $this->hasMany(ProductMedia::class);
    }

    public function decrementQuantity($amount = 1)
    {
        $this->decrement('stock', $amount);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Combine all boot logic into a single method
    public static function boot()
    {
        parent::boot();

        // Automatically generate slug when creating or updating
        static::creating(function ($product) {
            $product->slug = Str::slug($product->name);
        });

        static::updating(function ($product) {
            $product->slug = Str::slug($product->name);
        });

        // Increment rating_point when a product matches the search keyword
        static::retrieved(function ($product) {
            $key = request()->query('key');
            if ($key && (str_contains($product->name, $key) || str_contains($product->category->name, $key))) {
                $product->increment('rating_point');
            }
        });
    }
}
