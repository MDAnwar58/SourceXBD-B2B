<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Support;
use App\Models\User;
use App\Notifications\SupportRequestNotification;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['subject' => 'required']);
        Support::create(['user_id' => $request->user, 'subject' => $request->subject]);

        $admins = User::where('role', 'admin')->get();

        foreach ($admins as $admin) {
            $admin->notify(new SupportRequestNotification($request->subject, $request->user->name));
        }
        return response()->json([
            'message' => 'Support Request Send successfully',
        ], 200);
    }
}
