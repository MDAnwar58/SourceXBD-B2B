<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Subscription;
use App\Models\SubscriptionHistory;
use App\Models\User;
use App\Models\VerificationDocument;
use Illuminate\Http\Request;
use Intervention\Image\Laravel\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProfileController extends Controller
{

    public function updateProfile(Request $request)
    {
        $user = auth()->user();

        // Update user's profile
        $user->update($request->only(['name', 'email']));

        if ($user->role == 'seller') {
            $company = Company::updateOrCreate(
                ['user_id' => $user->id],
                $request->only(['name', 'logo','country','city_id', 'address', 'contact'])
            );

            $freeSubscription = Subscription::where('is_free', true)->first();

            if ($freeSubscription) {
                $this->assignFreeSubscription($user, $freeSubscription);
            }
        }

        return response()->json(['message' => 'Profile updated successfully']);
    }

    protected function assignFreeSubscription(User $user, Subscription $subscription)
    {
        $startDate = now();
        $endDate = $startDate->copy()->addDays($subscription->duration);

        SubscriptionHistory::create([
            'user_id' => $user->id,
            'subscription_id' => $subscription->id,
            'start_date' => $startDate,
            'end_date' => $endDate,
            'remaining_products' => $subscription->product_limit,
            'is_active' => true,
        ]);
    }
    public function documentStore(Request $request)
    {
        $request->validate([
            'title'=> 'required|string',
            'title'=> 'required|string',
        ]);
        $document = new VerificationDocument([
            'company_id' => auth()->user()->company->id,
            'title' => $request->title,
            'date' => $request->date,
        ]);
        $document->save();

        if ($request->hasFile('images')) {
            $this->uploadImages($request->file('images'), $document);
        }
        return response()->json($document->load('images'), 201);
    }

    public function documentupdate(Request $request, $id)
    {
        $request->validate([
            'title'=> 'required|string',
            'title'=> 'required|string',
        ]);
        $card = VerificationDocument::findOrFail($id);

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

    public function documentdestroy($id)
    {
        $card = VerificationDocument::findOrFail($id);

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
        $path = 'public/verify-document';

        // Check if the directory exists, if not create it with 0775 permissions
        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }
        if ($update && $card->images) {
            foreach ($card->images as $image) {
                Storage::delete('public/verify-document/' . $image->image);
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
