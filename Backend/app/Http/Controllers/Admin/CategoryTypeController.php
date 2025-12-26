<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryTypeRequest;
use App\Models\CategoryType;
use Illuminate\Http\Request;

class CategoryTypeController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $type = CategoryType::where('name', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return response()->json(['types' => $type]);
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
    public function store(CategoryTypeRequest $request)
    {
        CategoryType::create(
            $request->all()
        );
        return response()->json(['success' => 'CategoryType Created successfully'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $type = CategoryType::find($id);
        return response()->json($type);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $type = CategoryType::find($id);
        return response()->json($type);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        CategoryType::find($id)->update(
            $request->all()
        );
        return response()->json(['success' => 'CategoryType Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        CategoryType::find($id)->delete();
        return response()->json(['success' => 'CategoryType Deleted successfully'], 200);
    }
}
