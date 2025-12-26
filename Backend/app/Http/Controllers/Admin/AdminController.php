<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admins = User::admin()->get();
        return response()->json($admins);
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
    public function store(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'status' => 'active',
            'role' => 'admin',
        ]);
        $user->asyncRole($request->role);
        return response()->json(['success', 'Admin Created Successfully'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $admin = User::find($id);
        return response()->json($admin);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'status' => 'active',
            'role' => 'admin',
        ]);


        $user->syncRoles([]);
        $user->assignRole($request->role);

        return response()->json(['success', 'Admin Updated Successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $admin = User::find($id);
        $admin->syncRoles([]);
        $admin->forceDelete();
        return response()->json(['success', 'Admin Deleted Successfully'], 200);
    }

    public function status(string $id)
    {
        $admin = User::find($id);
        $admin->update([
            'status'=> $admin->status =='active'?'inactive':'active',
        ]);
        return response()->json(['success', 'Admin Status Updated Successfully'], 200);
    }
}
