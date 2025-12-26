<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SocialLinkResource;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class SocialLinkController extends Controller
{
    public function index()
    {
        $links = SocialLink::with('images')->first();
        return SocialLinkResource::collection($links);
    }

    public function store(Request $request)
    {
        $request->validate([
            'link_1' => 'required|string|max:255',
            'link_2' => 'required|string|max:255',
            'link_3' => 'required|string|max:255',
            'link_4' => 'required|string|max:255',
            'qr_code' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $link = SocialLink::first();

        if ($link) {
            $link->update([
                'link_1' => $request->link_1,
                'link_2' => $request->link_2,
                'link_3' => $request->link_3,
                'link_4' => $request->link_4,
                'app_apple' => $request->app_apple,
                'app_google' => $request->app_google,
            ]);
        } else {
            $link = SocialLink::create($request->only(['link_1', 'link_2', 'link_3', 'link_4', 'app_apple', 'app_google']));
        }

        if ($request->hasFile('qr_code')) {
            $this->uploadLogo($request->file('qr_code'), $link);
        }

        return response()->json($link, 201);
    }

    private function uploadLogo($file, $link)
    {
        // Delete the old logo if it exists
        if ($link->qr_code) {
            Storage::delete('public/link/' . $link->qr_code);
        }

        // Generate a new filename
        $filename = 'qr_code-' . time() . '-' . Str::random(5) . '.' . $file->getClientOriginalExtension();

        // Resize, compress, and store the logo
        $image = Image::make($file)
            ->resize(400, 320, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })
            ->encode($file->getClientOriginalExtension(), 75);

        if (strlen($image) > 1024 * 1024) {
            $image->encode($file->getClientOriginalExtension(), 50);
        }

        $path = 'public/link';

        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }

        Storage::put("{$path}/{$filename}", (string) $image);

        // Update the link with the new logo path
        $link->update(['qr_code' => $filename]);
    }
}
