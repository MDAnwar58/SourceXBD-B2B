<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Session;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ProfileController extends Controller
{
    public function profile(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'country_code_1' => 'nullable|string|max:5',
            'phone_2' => 'nullable|string|max:20',
            'country_code_2' => 'nullable|string|max:5',
            'first_name' => 'nullable|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $user->update($request->only('name', 'email', 'phone'));
        $user->profile->update([
            'phone_1' => $request->phone,
            'country_code_1' => $request->country_code_1,
            'phone_2' => $request->phone_2,
            'country_code_2' => $request->country_code_2,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'address' => $request->address,
        ]);

        if ($request->hasFile('image')) {
            $this->uploadLogo($request->file('image'), $user->profile);
        }

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
        ], 200);
    }
    public function password(Request $request)
    {
        $request->validate([
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:8|confirmed',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            throw ValidationException::withMessages([
                'current_password' => ['The provided password does not match your current password.'],
            ]);
        }

        $user->update([
            'password' => Hash::make($request->new_password),
        ]);

        return response()->json([
            'message' => 'Password changed successfully',
        ], 200);
    }

    public function sendCode(Request $request)
    {
        $request->validate([
            'country_code' => 'required|string',
            'phone_number' => 'required|string',
        ]);

        $user = auth()->user();

        // Generate a 6-digit random code
        $code = rand(100000, 999999);

        // Send the code via Twilio SMS
        $twilioSid = config('services.twilio.sid');
        $twilioToken = config('services.twilio.token');
        $twilioFrom = config('services.twilio.from');

        $client = new Client($twilioSid, $twilioToken);
        $client->messages->create(
            $request->country_code . $request->phone_number,
            [
                'from' => $twilioFrom,
                'body' => "Your verification code is: $code"
            ]
        );

        // Store the code in the session
        Session::put('2fa_code', $code);

        return response()->json(['message' => 'Verification code sent.'], 200);
    }

    public function verifyCode(Request $request)
    {
        $request->validate([
            'code' => 'required|integer',
        ]);

        $sessionCode = Session::get('2fa_code');

        if ($request->code == $sessionCode) {
            // Save the phone number in the TwoFactor table
            $user = auth()->user();
            TwoFactor::create([
                'user_id' => $user->id,
                'country_code' => $request->country_code,
                'phone_number' => $request->phone_number,
            ]);

            // Clear the session code
            Session::forget('2fa_code');

            return response()->json(['message' => 'Phone number verified and saved.'], 200);
        }

        return response()->json(['error' => 'Invalid verification code.'], 422);
    }

    private function uploadLogo($file, $profile)
    {
        // Delete the old logo if it exists
        if ($profile->photo) {
            Storage::delete('public/profile/' . $profile->photo);
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

        // Check if the image is still larger than 1MB and compress further if necessary
        if (strlen($image) > 1024 * 1024) {
            $image->encode($file->getClientOriginalExtension(), 50);
        }

        $path = 'public/profile';

        // Create the directory if it doesn't exist
        if (!Storage::exists($path)) {
            Storage::makeDirectory($path, 0775, true);
        }

        // Store the image
        Storage::put("{$path}/{$filename}", (string) $image);

        // Update the profile with the new image path
        $profile->update(['photo' => $filename]);
    }
}
