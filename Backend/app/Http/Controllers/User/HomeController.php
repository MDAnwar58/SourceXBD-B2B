<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Card;
use App\Models\Category;
use App\Models\City;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function categories()
    {
        $categories = Category::with('images')
            ->active()->get();
        return CategoryResource::collection($categories);
    }
    public function cards()
    {
        $cards = Card::with('images')
            ->active()->get();
        return response()->json($cards);
    }
    public function cities()
    {
        $cities = City::with('images')
            ->active()->get();
        return response()->json($cities);
    }
}
