<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Provider;
use Illuminate\Database\Seeder;
use App\Models\Usertype;
use App\Models\Category;
use App\Models\Enterprise;
use App\Models\Product;
use App\Models\User;
use App\Models\Sell;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(UsertypeSeeder::class);
        Enterprise::factory(10)->create();
        Category::factory(10)->create();
        Provider::factory(15)->create();
        Product::factory(30)->create();
        User::factory(20)->create();
        Sell::factory(20)->create();
    }
}
