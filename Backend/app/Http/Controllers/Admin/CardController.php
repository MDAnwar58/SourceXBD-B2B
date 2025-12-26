<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CardRequest;
use App\Models\Card;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


class CardController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $cards = Card::with('images')
            ->where('title', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return response()->json($cards);
    }
    public function store(CardRequest $request)
    {

        $card = new Card([
            'title' => $request->title,
            'status' => $request->status,
            'desc' => $request->desc,
        ]);
        $card->save();

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $card);
        }

        return response()->json($card->load('images'), 201);
    }

    public function show($id)
    {
        $card = Card::with('images')->findOrFail($id);
        return response()->json($card);
    }

    public function update(CardRequest $request, $id)
    {
        $card = Card::findOrFail($id);

        $card->update([
            'title' => $request->title,
            'desc' => $request->desc,
            'status' => $request->status,
        ]);

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $card, true);
        }

        return response()->json($card->load('images'), 200);
    }

    public function destroy($id)
    {
        $card = Card::findOrFail($id);

        if ($card->images) {
            foreach ($card->images as $image) {
                Storage::delete('public/cards/' . $image->image);
                $image->delete();
            }
        }

        $card->delete();

        return response()->json(null, 204);
    }

    private function uploadImages($files, $card, $update = false)
    {
        $path = 'public/cards';

        // Check if the directory exists, if not create it with 0775 permissions
        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }
        if ($update && $card->images) {
            foreach ($card->images as $image) {
                Storage::delete('public/cards/' . $image->image);
                $image->delete();
            }
        }

        foreach ($files as $file) {
            $filename = $card->slug . '-' . time() . '-' . Str::random(5) . '.' . $file->getClientOriginalExtension();

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

            // Store the image in the specified path
            Storage::put("{$path}/{$filename}", (string)$image);

            // Save image details in the database
            $card->images()->create([
                'image' => $filename,
            ]);
        }
    }
}
