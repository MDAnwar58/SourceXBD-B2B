<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PermisionRequest;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $parmission = Permission::where('name', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return response()->json(['permisions' => $parmission]);
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
    public function store(PermisionRequest $request)
    {
        Permission::create(
            $request->all()
        );
        return response()->json(['success' => 'Permission Created successfully'], 200);
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
        $permission = Permission::find($id);
        return response()->json($permission);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PermisionRequest $request, string $id)
    {
        Permission::find($id)->update(
            $request->all()
        );
        return response()->json(['success' => 'Permission Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Permission::find($id)->delete();
        return response()->json(['success' => 'Permission Deleted successfully'], 200);
    }
}
