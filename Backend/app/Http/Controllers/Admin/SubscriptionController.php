<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SubscriptionRequest;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index(Request $request)
    {
        $key = $request->query('key');
        $perPage = $request->query('number', 10);

        $subscription = Subscription::where('duration', 'LIKE', '%' . $key . '%')
            ->paginate($perPage);

        return response()->json(['subscriptions' => $subscription]);
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
    public function store(SubscriptionRequest $request)
    {
        Subscription::create(
            $request->all()
        );
        return response()->json(['success' => 'Subscription Created successfully'], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $subscription = Subscription::find($id);
        return response()->json($subscription);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $subscription = Subscription::find($id);
        return response()->json($subscription);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SubscriptionRequest $request, string $id)
    {
        Subscription::find($id)->update(
            $request->all()
        );
        return response()->json(['success' => 'Subscription Updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Subscription::find($id)->delete();
        return response()->json(['success' => 'Subscription Deleted successfully'], 200);
    }
}
