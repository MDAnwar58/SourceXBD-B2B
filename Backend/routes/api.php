<?php

use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Seller\SubsctiptionController;
use App\Http\Controllers\Seller\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\MassageController as UserMassageController;
use App\Http\Controllers\Seller\MassageController as SellerMassageController;
use App\Http\Controllers\Seller\SubscriptionPaymentController;
use App\Http\Controllers\User\PaymentController;
use App\Http\Controllers\User\ProfileController as BuyerProfileController;
use App\Http\Controllers\User\WishlistController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::get('login/{provider}', [AuthController::class, 'redirectToProvider'])->name('social.login');
    Route::get('login/{provider}/callback', [AuthController::class, 'handleProviderCallback'])->name('social.callback');
});
Route::group([
    'middleware' => ['api', 'auth:api'],
    'prefix' => 'user'
], function ($router) {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
    Route::get('/me', [AuthController::class, 'me'])->name('me');


    Route::post('/password', [BuyerProfileController::class, 'password']);
    Route::post('/profile', [BuyerProfileController::class, 'profile']);
    Route::post('/send-code', [BuyerProfileController::class, 'sendCode']);
    Route::post('/verify-code', [BuyerProfileController::class, 'verifyCode']);

    Route::group([
        'middleware' => ['api', 'auth:api'],
        'prefix' => 'messages'
    ], function ($router) {
        Route::post('/', [UserMassageController::class, 'sendMessage']);
        Route::get('/', [UserMassageController::class, 'getUserMessages']);
        Route::get('/{id}', [UserMassageController::class, 'getMessageWithReplies']);
        Route::patch('/{id}', [UserMassageController::class, 'editMessage']);
        Route::delete('/{id}', [UserMassageController::class, 'deleteMessage']);
        Route::patch('/{id}/read', [UserMassageController::class, 'markAsRead']);
    });


    Route::group([
        'middleware' => ['api', 'auth:api'],
        'prefix' => 'product'
    ], function ($router) {
        Route::post('/orders/create', [PaymentController::class, 'createOrder']);
        Route::post('/payment/success', [PaymentController::class, 'paymentSuccess']);
        Route::post('/payment/fail', [PaymentController::class, 'paymentFail']);
        Route::post('/payment/cancel', [PaymentController::class, 'paymentCancel']);
    });
    
    Route::group([
        'middleware' => ['api', 'auth:api'],
        'prefix' => 'wishlist'
    ], function ($router) {
        Route::get('/', [WishlistController::class, 'index']);
        Route::post('/', [WishlistController::class, 'store']);
        Route::delete('/{productId}', [WishlistController::class, 'destroy']);
    });
});
