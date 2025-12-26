<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */

     public function products()
     {
         return $this->hasMany(Product::class);
     }

     public function sentMessages()
     {
         return $this->hasMany(Massage::class, 'from_id');
     }

     public function receivedMessages()
     {
         return $this->hasMany(Massage::class, 'to_id');
     }

     public function company()
     {
         return $this->hasOne(Company::class);
     }

     public function profile()
     {
         return $this->hasOne(Profile::class);
     }

     public function twoFactor()
     {
         return $this->hasOne(TwoFactor::class);
     }

     public function subscriptionHistories()
     {
         return $this->hasMany(SubscriptionHistory::class);
     }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function scopeAdmin(Builder $query): void
    {
        $query->where('role', 'admin');
    }
    public function scopeBuyer(Builder $query): void
    {
        $query->where('role', 'buyer');
    }
    public function scopeSeller(Builder $query): void
    {
        $query->where('role', 'seller');
    }

    public function scopeActive(Builder $query): void
    {
        $query->where('status', 'active');
    }

    public function scopeInActive(Builder $query): void
    {
        $query->where('status', 'inactive');
    }
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
