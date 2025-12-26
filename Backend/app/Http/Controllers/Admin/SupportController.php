<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Support;
use App\Models\User;
use App\Notifications\SupportAndwerNotification;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    public function store(Request $request, string $id)
    {
        $request->validate(['answer' => 'required']);

        $support = Support::find($id);
        $support->update([
            'status' => 'done',
            'answer' => $request->answer
        ]);

        $support->user_id->notify(new SupportAndwerNotification($support->subject, $request->answer));

        return response()->json([
            'message' => 'Support Reply Send successfully',
        ], 200);
    }
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $data = Support::with('user')->query();
        if ($key) {
            $data->where('subject', 'LIKE', '%' . $key . '%');
        }
        if ($request->user) {
            $data->where('user_id', $request->user);
        }

        $supports = $data->paginate($perPage);;
        return response()->json($supports);
    }
}
