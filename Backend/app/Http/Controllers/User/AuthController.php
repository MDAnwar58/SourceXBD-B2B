<?php
namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionHistory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    // Register a new user
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'buyer',
            'status' => 'active',
        ]);

        $token = $this->createCustomToken($user);

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    // Login a user
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = Auth::user();
        if ($user->hasRole('seller')) {
            $this->checkAndAssignSubscriptionPermissions($user);
        }

        $token = $this->createCustomToken($user);

        return $this->respondWithToken($token);
    }

    // Create custom JWT token
    protected function createCustomToken(User $user)
    {
        $payload = [
            'sub' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'roles' => $user->roles->pluck('name')->toArray(),
            'permissions' => $user->getAllPermissions()->pluck('name')->toArray(),
            'iat' => now()->timestamp,
            'exp' => now()->addYear()->timestamp, // 1 year expiration

        ];

        return JWTAuth::claims($payload)->fromUser($user);
    }

    // Check and assign subscription-based permissions
    protected function checkAndAssignSubscriptionPermissions(User $user)
    {
        $activeSubscription = SubscriptionHistory::where('user_id', $user->id)
            ->where('is_active', true)
            ->where('end_date', '>=', now())
            ->first();

        if ($activeSubscription) {
            $this->assignSubscriptionPermissions($user, $activeSubscription);
        } else {
            $this->deactivateProducts($user);
        }
    }

    // Assign subscription-based permissions
    protected function assignSubscriptionPermissions(User $user, $subscription)
    {
        $permissions = ['add product', 'view product'];
        $productLimit = $subscription->remaining_products;

        foreach ($permissions as $permission) {
            if (!$user->can($permission)) {
                $user->givePermissionTo($permission);
            }
        }

        if ($productLimit <= 10) {
            $user->givePermissionTo('limited products');
        }
    }

    // Deactivate products if no active subscription
    protected function deactivateProducts(User $user)
    {
        $user->products()->where('status', 'active')->update(['status' => 'inactive']);
    }

    // Social login redirect
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    // Social login callback
    public function handleProviderCallback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unable to authenticate user.'], 401);
        }

        $user = User::firstOrCreate(
            ['provider_id' => $socialUser->getId()],
            [
                'name' => $socialUser->getName(),
                'email' => $socialUser->getEmail(),
                'provider' => $provider,
                'password' => Hash::make(uniqid())
            ]
        );

        Auth::login($user);

        $token = $this->createCustomToken($user);

        return response()->json(['token' => $token, 'user' => $user]);
    }

    // Get authenticated user info
    public function me()
    {
        return response()->json(['user' => auth()->user()]);
    }

    // Logout user (invalidate token)
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    // Refresh JWT token
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    // Respond with token structure
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60 // token TTL in seconds
        ]);
    }
}
