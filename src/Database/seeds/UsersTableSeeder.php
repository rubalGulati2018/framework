<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Nitseditor\Framework\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         factory(User::class, 2)->create();
        DB::table('users')->insert([
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@nitseditor.com',
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => Str::random(10),
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@nitseditor.com',
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => Str::random(10),
            ],

        ]);
    }
}
