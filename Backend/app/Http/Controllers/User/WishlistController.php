<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\FrontendProductResource;
use App\Models\Product;
use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function index()
    {
        $wishlistItems = Wishlist::where('user_id', auth()->id())->with('product')->get();

        return FrontendProductResource::collection($wishlistItems->pluck('product'));
    }

    // Store a product in the wishlist
    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $product = Product::find($request->product_id);

        // Check if the product is already in the user's wishlist
        if (Wishlist::where('user_id', auth()->id())->where('product_id', $product->id)->exists()) {
            return response()->json(['message' => 'Product is already in your wishlist'], 400);
        }

        Wishlist::create([
            'user_id' => auth()->id(),
            'product_id' => $product->id,
        ]);

        // Increment the product rating_point
        $product->increment('rating_point');

        return response()->json(['message' => 'Product added to wishlist successfully'], 201);
    }

    // Delete a product from the wishlist
    public function destroy($productId)
    {
        $wishlistItem = Wishlist::where('user_id', auth()->id())->where('product_id', $productId)->first();

        if (!$wishlistItem) {
            return response()->json(['message' => 'Product not found in your wishlist'], 404);
        }

        $wishlistItem->delete();

        return response()->json(['message' => 'Product removed from wishlist successfully'], 200);
    }
}
