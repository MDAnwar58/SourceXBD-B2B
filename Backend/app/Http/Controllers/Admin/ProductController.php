<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;
use FFMpeg\FFMpeg;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use Illuminate\Support\Facades\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $products = Product::with('media','category','user')->where('name', 'LIKE', '%' . $key . '%')
            ->orWhereHas('category', function ($query) use ($key) {
                $query->where('name', 'LIKE', '%' . $key . '%');
            })
            ->paginate($perPage);

        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        $user = $request->user();

        $subscription = $this->getActiveSubscription($user);

        if (!$subscription) {
            return response()->json(['error' => 'No active subscription found'], 403);
        }

        $activeProductCount = $user->products()->where('status', 'active')->count();

        if ($subscription->product_qty <= $activeProductCount) {
            // Set the status to 'inactive' if the user has reached their limit
            $request->merge(['status' => 'inactive']);
        } else {
            // Allow the product to be active if under the limit
            $request->merge(['status' => 'active']);
        }

        $product = $user->products()->create($request->all());

        if ($request->hasFile('files')) {
            $this->uploadFiles($request->file('files'), $product);
        }

        if ($product->status === 'active') {
            $subscription->decrement('remaining_products');
        }

        return response()->json($product->load('media'), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::with('media')->findOrFail($id);
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update($request->only([
            'name',
            'price',
            'stock',
            'status',
            'section',
            'is_show',
            'contact'
        ]));

        if ($request->hasFile('files')) {
            $this->uploadFiles($request->file('files'), $product, true);
        }

        return response()->json($product->load('media'), 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);

        foreach ($product->media as $media) {
            Storage::delete($media->file_path);
            $media->delete();
        }

        $product->delete();

        return response()->json(null, 204);
    }

    /**
     * Handle file uploads (images and videos) for products.
     */
    private function uploadFiles($files, $product, $update = false)
    {
        if ($update) {
            $this->deleteMedia($product);
        }

        $imageCount = 0;
        $videoCount = 0;

        foreach ($files as $file) {
            $extension = $file->getClientOriginalExtension();
            $filename = $this->generateFilename($product->slug, $extension);

            if ($this->isImage($extension)) {
                if (++$imageCount > 5) {
                    break;
                }
                $this->processImage($file, $filename);
                $mediaType = 'image';
            } elseif ($this->isVideo($extension)) {
                if (++$videoCount > 1) {
                    continue;
                }
                $this->processVideo($file, $filename);
                $mediaType = 'video';
            } else {
                continue;
            }

            $product->media()->create($this->createMediaData($mediaType, $filename));
        }
    }

    /**
     * Process and resize an image.
     */
    private function processImage($file, $filename)
    {
        $path = 'public/products/images';

        // Ensure the directory exists
        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }

        // Resize the image to 400x320
        $image = Image::make($file)->resize(400, 320, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        })->encode($file->getClientOriginalExtension());

        Storage::put("{$path}/{$filename}", $image);
    }

    /**
     * Process and resize a video.
     */
    private function processVideo($file, $filename)
    {
        $path = storage_path('app/public/products/videos');

        // Ensure the directory exists
        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }

        // Check if the video is larger than 25MB
        if ($file->getSize() > 25 * 1024 * 1024) {
            throw new \Exception('Video size should not exceed 25MB');
        }

        // Initialize FFMpeg for video processing
        $ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($file->getPathname());

        $format = new X264();
        $format->setKiloBitrate(1000); // Adjust this value to reduce the size of the video

        // Resize the video
        $video->filters()->resize(new Dimension(1250, 720))->synchronize();
        $video->save($format, "{$path}/{$filename}");
    }

    /**
     * Create media data for saving to the database.
     */
    private function createMediaData($type, $filename)
    {
        return [
            'media_type' => $type,
            'file_path' => "public/products/{$type}s/{$filename}",
        ];
    }

    /**
     * Delete media files associated with a product.
     */
    private function deleteMedia($product)
    {
        foreach ($product->media as $media) {
            Storage::delete($media->file_path);
            $media->delete();
        }
    }

    /**
     * Generate a unique filename.
     */
    private function generateFilename($slug, $extension)
    {
        return "{$slug}-" . time() . '-' . Str::random(5) . ".{$extension}";
    }

    /**
     * Check if the file is an image.
     */
    private function isImage($extension)
    {
        return in_array($extension, ['jpeg', 'png', 'jpg', 'gif', 'svg']);
    }

    /**
     * Check if the file is a video.
     */
    private function isVideo($extension)
    {
        return in_array($extension, ['mp4', 'mov', 'ogg']);
    }

    /**
     * Retrieve the active subscription for the user.
     */
    protected function getActiveSubscription($user)
    {
        return $user->subscriptionHistories()->where('is_active', true)
            ->where('end_date', '>=', now())->first();
    }
}
