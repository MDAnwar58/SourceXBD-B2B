<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\CategoryType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query("key");
        $perPage = $request->query("number", 10);

        $categories = Category::with(["images", "category_type"])
            ->whereAny(["name", "slug"], "LIKE", "%" . $key . "%")
            ->latest("created_at")
            ->paginate($perPage);

        return $categories;
    }
    public function categoryTypes()
    {
        $categoryTypes = CategoryType::latest()->get();
        return $categoryTypes;
    }
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required|string|max:255",
            "images.*" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
        ]);

        $category = new Category();
        $category->category_type_id = $request->category_type_id;
        $category->name = $request->name;
        $category->status = $request->status;
        $category->desc = $request->desc;
        $category->save();

        if ($request->hasFile("images")) {
            $this->uploadImages($request->file("images"), $category);
        }
        // $category->load("images")
        return response()->json([
            "status" => "success",
            "msg" => "Category created successfully",
        ], 201);
    }

    public function show($id)
    {
        $category = Category::findOrFail($id);
        return $category;
    }

    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $request->validate([
            "name" => "required|string|max:255",
            "images.*" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048",
        ]);

        $category->update([
            "name" => $request->name,
            "desc" => $request->desc,
            "status" => $request->status,
            "slug" => Str::slug($request->name),
        ]);

        if ($request->hasFile("images")) {
            $this->uploadImages($request->file("images"), $category, true);
        }

        // return response()->json($category->load("images"), 200);

        return response()->json([
            "status" => "success",
            "msg" => "Category Updated!",
        ], 200);
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);

        if ($category->images) {
            foreach ($category->images as $image) {
                Storage::delete("public/categories/" . $image->image);
                $image->delete();
            }
        }

        $category->delete();

        return response()->json([
            "status" => "success",
            "msg" => "Category Deleted!",
        ], 200);
    }

    private function uploadImages($files, $category, $update = false)
    {
        if ($update && $category->images) {
            foreach ($category->images as $image) {
                Storage::delete("public/categories/" . $image->image);
                $image->delete();
            }
        }

        foreach ($files as $file) {
            $filename =
                $category->slug . "-" . time() . "-" . Str::random(5) . "." . $file->getClientOriginalExtension();

            // Resize and compress the image
            $image = Image::make($file)
                ->resize(400, 320, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })
                ->encode($file->getClientOriginalExtension(), 75); // Adjust compression quality to reduce file size

            // Check if the image is still larger than 1MB
            if (strlen($image) > 1024 * 1024) {
                // Further compress the image to bring it under 1MB
                $image->encode($file->getClientOriginalExtension(), 50); // Lower quality for smaller size
            }

            $path = "public/categories";

            if (!Storage::exists($path)) {
                Storage::makeDirectory($path, 0775, true);
            }

            Storage::put("{$path}/{$filename}", (string) $image);

            $category->images()->create([
                "image" => $filename,
            ]);
        }
    }
}
