<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CardController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CategoryTypeController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\MassageController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\Admin\SocialLinkController;
use App\Http\Controllers\Admin\SubscriptionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;


Route::group([
    'middleware' => 'api',
    'prefix' => 'admin'
], function () {
    Route::post('/login', [AuthController::class, 'login'])->name('login');
});

Route::group([
    'middleware' => ['api'], // , 'jwt.auth', 'admin'
    'prefix' => 'admin'
], function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->name('refresh');
    Route::get('/me', [AuthController::class, 'me'])->name('me');

    Route::post('/password', [ProfileController::class, 'password']);
    Route::post('/profile', [ProfileController::class, 'profile']);
    Route::post('/send-code', [ProfileController::class, 'sendCode']);
    Route::post('/verify-code', [ProfileController::class, 'verifyCode']);

    Route::group([
        'prefix' => 'admins'
    ], function () {
        Route::get('/', [AdminController::class, 'index']);
        Route::get('/{id}', [AdminController::class, 'edit']);
        Route::post('/', [AdminController::class, 'store']);
        Route::put('/{id}', [AdminController::class, 'update']);
        Route::get('/{id}', [AdminController::class, 'status']);
        Route::delete('/{id}', [AdminController::class, 'destroy']);
    });

    Route::group([
        'prefix' => 'settings'
    ], function () {
        Route::get('/', [SettingsController::class, 'index']);
        Route::post('/', [SettingsController::class, 'store']);
    });

    Route::group([
        'prefix' => 'social-links'
    ], function () {
        Route::get('/', [SocialLinkController::class, 'index']);
        Route::post('/', [SocialLinkController::class, 'store']);
    });

    Route::apiResource('/permission', PermissionController::class);

    Route::apiResource('/role', RoleController::class);

    Route::apiResource('/category_types', CategoryTypeController::class);

    Route::apiResource('/categories', CategoryController::class);
    Route::get('/category-types', [CategoryController::class, 'categoryTypes']);

    Route::apiResource('/cities', CityController::class);

    Route::apiResource('/products', ProductController::class);

    Route::apiResource('/subscriptions', SubscriptionController::class);

    Route::apiResource('/cards', CardController::class);

    Route::apiResource('/faqs', FaqController::class);

    Route::group([
        'middleware' => ['api', 'auth:api'],
        'prefix' => 'messages'
    ], function ($router) {
        Route::post('/', [MassageController::class, 'sendMessage']);
        Route::get('/', [MassageController::class, 'getUserMessages']);
        Route::get('/{id}', [MassageController::class, 'getMessageWithReplies']);
        Route::patch('/{id}', [MassageController::class, 'editMessage']);
        Route::delete('/{id}', [MassageController::class, 'deleteMessage']);
        Route::patch('/{id}/read', [MassageController::class, 'markAsRead']);
    });
});
