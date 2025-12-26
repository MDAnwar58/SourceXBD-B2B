<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $blogs = Blog::with('images')
            ->where('title', 'LIKE', '%' . $key . '%')
            ->orWhere('sub_title', 'LIKE', '%' . $key . '%')
            ->orWhere('tags', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return BlogResource::collection($blogs);
    }

    public function store(BlogRequest $request)
    {
        $blog = Blog::create($request->validated());

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $blog);
        }

        return response()->json($blog->load('images'), 201);
    }

    public function show($id)
    {
        $blog = Blog::with('images')->findOrFail($id);
        return new BlogResource($blog);
    }

    public function update(BlogRequest $request, $id)
    {
        $blog = Blog::findOrFail($id);
        $blog->update($request->validated());

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $blog, true);
        }

        return response()->json($blog->load('images'), 200);
    }

    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->images()->delete();
        $blog->delete();

        return response()->json(null, 204);
    }

    private function uploadImages($files, $blog, $update = false)
    {
        if ($update && $blog->images) {
            foreach ($blog->images as $image) {
                Storage::delete('public/blogs/' . $image->image);
                $image->delete();
            }
        }

        foreach ($files as $file) {
            $filename = $blog->slug . '-' . time() . '-' . Str::random(5) . '.' . $file->getClientOriginalExtension();

            // Handle image processing and storage here
            // Assuming the InnovationImage package provides a method to handle this
            $image = Image::make($file)->resize(400, 320)->encode($file->getClientOriginalExtension(), 75);

            if (strlen($image) > 1024 * 1024) {
                $image->encode($file->getClientOriginalExtension(), 50);
            }

            $path = 'public/blogs';
            if (!Storage::exists($path)) {
                Storage::makeDirectory($path, 0775, true);
            }

            Storage::put("{$path}/{$filename}", (string)$image);

            $blog->images()->create([
                'image' => $filename,
            ]);
        }
    }
}
