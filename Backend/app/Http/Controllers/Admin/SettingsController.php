<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SettingResource;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Laravel\Facades\Image;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = Setting::with('images')->first();
        return SettingResource::collection($settings);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $setting = Setting::first();

        if ($setting) {
            $setting->update([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
            ]);
        } else {
            $setting = Setting::create($request->only(['name', 'email', 'address']));
        }

        if ($request->hasFile('logo')) {
            $this->uploadLogo($request->file('logo'), $setting);
        }

        return response()->json($setting, 201);
    }

    private function uploadLogo($file, $setting)
    {
        // Delete the old logo if it exists
        if ($setting->logo) {
            Storage::delete('public/settings/' . $setting->logo);
        }

        // Generate a new filename
        $filename = 'logo-' . time() . '-' . Str::random(5) . '.' . $file->getClientOriginalExtension();

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

        $path = 'public/settings';

        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }

        Storage::put("{$path}/{$filename}", (string) $image);

        // Update the setting with the new logo path
        $setting->update(['logo' => $filename]);
    }

}
