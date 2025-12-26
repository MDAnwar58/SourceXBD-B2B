<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\FrontendProductResource;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $products = Product::with(['media' => function ($query) {
            $query->where('type', 'image')->take(1);
        }, 'category:id,name', 'user:id,name'])
            ->where(function ($query) use ($key) {
                $query->where('name', 'LIKE', '%' . $key . '%')
                    ->orWhereHas('category', function ($query) use ($key) {
                        $query->where('name', 'LIKE', '%' . $key . '%');
                    });
            })
            ->paginate($perPage);
        if ($key) {
            foreach ($products as $product) {
                if (str_contains($product->name, $key) || str_contains($product->category->name, $key)) {
                    $product->increment('rating_point');
                }
            }
        }
        return FrontendProductResource::collection($products);
    }
    public function show($slug)
    {

        $product = Product::with('media','category', 'user')
            ->where('slug', $slug)
            ->firstOrFail();

        $product->increment('rating_point');

        return new ProductResource($product);
    }
}
