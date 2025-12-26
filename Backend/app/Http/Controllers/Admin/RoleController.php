<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoleRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $key = $request->query('key'); // Get the search key from query parameters
        $perPage = $request->query('number', 10); // Default items per page is 10

        $roles = Role::with('permissions')
            ->where('name', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);
        return response()->json(['roles' => $roles]);
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
    public function store(RoleRequest $request): JsonResponse
    {
        // Create the role
        $role = Role::create([
            'name' => $request->name,
        ]);

        // Assign permissions to the role
        $role->syncPermissions($request->permission_id);

        return response()->json(['message' => 'Role created successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $role = Role::with('permissions')->find($id);
        // Debugging
        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }
        // Debug output
        return response()->json([
            'role' => $role,
            'permissions' => $role->permissions
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): JsonResponse
    {
        $role = Role::with('permissions')->find($id);
        // Debugging
        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }
        // Debug output
        return response()->json([
            'role' => $role,
            'permissions' => $role->permissions
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleRequest $request, $id)
    {
        $role = Role::find($id);

        if (!$role) {
            return response()->json(['message' => 'Role not found'], 404);
        }

        $role->update([
            'name' => $request->name,
        ]);

        // Assign permissions to the role
        $role->syncPermissions($request->permission_id);

        return response()->json(['message' => 'Role updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::find($id);
        $role->permissions()->detach();
        $role->delete();
        return response()->json(['success' => 'Role Deleted successfully'], 200);
    }
}
