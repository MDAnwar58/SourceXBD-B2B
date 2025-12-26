<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $roles = [
            ['name' => 'admin'],
            ['name' => 'buyer'],
            ['name' => 'seller'],
        ];

        foreach ($roles as $role) {
            Role::create($role);
        }

        // Creating users and assigning roles
        $buyer = User::factory()->create([
            'name' => 'buyer',
            'email' => 'buyer@gmail.com',
            'role' => 'buyer',
            'status' => 'active',
            'phone' => '01700000000',
            'password' => Hash::make('123456789'),
        ]);
        $buyer->assignRole('buyer');

        $seller = User::factory()->create([
            'name' => 'seller',
            'email' => 'seller@gmail.com',
            'role' => 'seller',
            'status' => 'active',
            'phone' => '01711111111',
            'password' => Hash::make('123456789'),
        ]);
        $seller->assignRole('seller');

        $admin = User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
            'status' => 'active',
            'phone' => '017xxxxxxxx',
            'password' => Hash::make('123456789'),
        ]);
        $admin->assignRole('admin');
    }
}
