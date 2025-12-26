<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\CityResource;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CityController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $cities = City::with('images')->whereAny(['name', 'slug'], 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return CityResource::collection($cities);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $city = new City([
            'name' => $request->name,
            'status' => $request->status ? $request->status : 'active',
            'desc' => $request->desc,
        ]);
        $city->save();

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $city);
        }

        return response()->json($city->load('images'), 201);
    }

    public function show($id)
    {
        $city = City::with('images')->findOrFail($id);
        return CityResource::collection($city);
    }

    public function update(Request $request, $id)
    {
        $city = City::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $city->update([
            'name' => $request->name,
            'desc' => $request->desc,
            'status' => $request->status,
            'slug' => Str::slug($request->name),
        ]);

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $city, true);
        }

        return response()->json($city->load('images'), 200);
    }

    public function destroy($id)
    {
        $city = City::findOrFail($id);

        if ($city->images) {
            foreach ($city->images as $image) {
                Storage::delete('public/cities/' . $image->image);
                $image->delete();
            }
        }

        $city->delete();

        return response()->json(null, 204);
    }

    private function uploadImages($files, $city, $update = false)
    {
        if ($update && $city->images) {
            foreach ($city->images as $image) {
                Storage::delete('public/cities/' . $image->image);
                $image->delete();
            }
        }

        foreach ($files as $file) {
            $filename = $this->resizeAndConvertToWebP($file);

            $city->images()->create([
                'image' => $filename,
            ]);
        }
    }
    private function resizeAndConvertToWebP($file)
{
    // Get the original image dimensions
    list($width, $height) = getimagesize($file->getRealPath());

    // Create a new true color image
    $newWidth = 400;
    $newHeight = 320;

    $srcImage = imagecreatefromstring(file_get_contents($file->getRealPath()));
    $dstImage = imagecreatetruecolor($newWidth, $newHeight);

    // Resize the image
    imagecopyresampled($dstImage, $srcImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

    // Create a unique filename
    $filename = time() . '_' . uniqid() . '.webp';
    $path = 'public/cities';

    if (!Storage::exists($path)) {
        Storage::makeDirectory($path, 0775, true);
    }

    // Save the image as a WebP file
    imagewebp($dstImage, storage_path("app/{$path}/{$filename}"), 75);

    // Free up memory
    imagedestroy($srcImage);
    imagedestroy($dstImage);

    return $filename; // Return the filename to save in the database
}
}
