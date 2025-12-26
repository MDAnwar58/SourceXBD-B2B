<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;
use FFMpeg\FFMpeg;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $products = Product::with('media','category','user')->where('user_id',$request->user)->where('name', 'LIKE', '%' . $key . '%')
            ->orWhereHas('category', function ($query) use ($key) {
                $query->where('name', 'LIKE', '%' . $key . '%');
            })
            ->paginate($perPage);

        return ProductResource::collection($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
            // If the user has reached their limit, set the status to 'inactive'
            $request->merge(['status' => 'inactive']);
        } else {
            // Otherwise, allow them to set the status as 'active'
            $request->merge(['status' => 'active']);
        }

        // Merge user_id into the request data to ensure it's set correctly
        $productData = array_merge($request->all(), ['user_id' => $user->id]);

        // Create the product with the correct user_id
        $product = Product::create($productData);

        if ($request->hasFile('files')) {
            $this->uploadFiles($request->file('files'), $product);
        }

        if ($product->status === 'active') {
            $subscription->decrement('remaining_products');
        }

        return response()->json($product->load('media'), 201);
    }

    protected function getActiveSubscription(User $user)
    {
        return $user->subscriptionHistories()
            ->where('is_active', true)
            ->where('end_date', '>=', now())
            ->first();
    }

    public function show($id)
    {
        $product = Product::with('media')->findOrFail($id);
        return ProductResource::collection($product);
    }

    public function update(ProductRequest $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update($request->only([
            'name',
            'price',
            'stock',
            'status'
        ]));

        if ($request->hasFile('files')) {
            $this->uploadFiles($request->file('files'), $product, true);
        }

        return response()->json($product->load('media'), 200);
    }

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

    private function uploadFiles($files, $product, $update = false)
    {

        if ($update) {
            foreach ($product->media as $media) {
                Storage::delete($media->file_path);
                $media->delete();
            }
        }

        $imageCount = 0;
        $videoCount = 0;

        foreach ($files as $file) {
            $extension = $file->getClientOriginalExtension();
            $filename = $product->slug . '-' . time() . '-' . Str::random(5) . '.' . $extension;

            if (in_array($extension, ['jpeg', 'png', 'jpg', 'gif', 'svg'])) {
                if (++$imageCount > 5) {
                    break;
                }

                // Resize the image to 400x320
                $image = Image::make($file)->resize(400, 320, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                })->encode($extension);

                $path = 'public/products/images';

                if (!Storage::exists($path)) {
                    Storage::makeDirectory($path, 0775, true);
                }

                Storage::put("public/products/images/{$filename}", $image);
                $mediaType = 'image';
            } elseif (in_array($extension, ['mp4', 'mov', 'ogg'])) {
                if (++$videoCount > 1) {
                    continue;
                }

                // Check if the video is larger than 25MB
                if ($file->getSize() > 25 * 1024 * 1024) {
                    throw new \Exception('Video size should not exceed 25MB');
                }

                // Resize video to 1250x720
                $ffmpeg = FFMpeg::create();
                $video = $ffmpeg->open($file->getPathname());

                $format = new X264();
                $format->setKiloBitrate(1000); // Adjust this value to reduce the size of the video

                $video->filters()->resize(new Dimension(1250, 720))->synchronize();
                $video->save($format, storage_path("app/public/products/videos/{$filename}"));

                $mediaType = 'video';
            } else {
                continue;
            }

            $product->media()->create([
                'media_type' => $mediaType,
                'file_path' => "public/products/{$mediaType}s/{$filename}",
            ]);
        }
    }
}
