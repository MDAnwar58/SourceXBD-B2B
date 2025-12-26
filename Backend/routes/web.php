<?php

use App\Http\Controllers\User\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['web'])->group(function () {
    Route::get('auth/{provider}', [AuthController::class, 'redirectToProvider']);
    Route::get('auth/{provider}/callback', [AuthController::class, 'handleProviderCallback']);
});
