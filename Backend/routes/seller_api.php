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

    Route::get('/subscriptions', [SubsctiptionController::class, 'index']); // Get all subscriptions
    Route::post('/subscriptions', [SubsctiptionController::class, 'store']);

    Route::apiResource('products', ProductController::class);


    Route::group([
        'middleware' => ['api', 'auth:api'],
        'prefix' => 'messages'
    ], function ($router) {
        Route::post('/', [SellerMassageController::class, 'sendMessage']);
        Route::get('/', [SellerMassageController::class, 'getUserMessages']);
        Route::get('/{id}', [SellerMassageController::class, 'getMessageWithReplies']);
        Route::patch('/{id}', [SellerMassageController::class, 'editMessage']);
        Route::delete('/{id}', [SellerMassageController::class, 'deleteMessage']);
        Route::patch('/{id}/read', [SellerMassageController::class, 'markAsRead']);
    });

    Route::group([
        'middleware' => ['api', 'auth:api'],
        'prefix' => 'subscription'
    ], function ($router) {
        Route::post('/payment/initiate', [SubscriptionPaymentController::class, 'initiatePayment']);
        Route::post('/payment/success', [SubscriptionPaymentController::class, 'paymentSuccess'])->name('payment.success');
        Route::post('/payment/fail', [SubscriptionPaymentController::class, 'paymentFail'])->name('payment.fail');
        Route::post('/payment/cancel', [SubscriptionPaymentController::class, 'paymentCancel'])->name('payment.cancel');
    });

});
