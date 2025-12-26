<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\FaqRequest;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $faq = Faq::where('qa', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return response()->json(['faqs' => $faq]);
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
    public function store(FaqRequest $request)
    {
        Faq::create(
            $request->all()
        );
        return response()->json(['success' => 'Faq Created successfully'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $faq = Faq::find($id);
        return response()->json($faq);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $faq = Faq::find($id);
        return response()->json($faq);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FaqRequest $request, string $id)
    {
        Faq::find($id)->update(
            $request->all()
        );
        return response()->json(['success' => 'Faq Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Faq::find($id)->delete();
        return response()->json(['success' => 'Faq Deleted successfully'], 200);
    }
}
