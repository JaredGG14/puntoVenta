<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usertype;

class UsertypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $type = new Usertype();
        $type -> userType = "Employee";
        $type -> save();
        $type = new Usertype();
        $type -> userType = "Admin";
        $type -> save();
    }
}
