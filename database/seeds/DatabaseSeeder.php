<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use flatbox\Device;


class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      Model::unguard();
      Device::truncate();
      factory(Device::class, 100)->create();
      Model::reguard();
        // $this->call(UsersTableSeeder::class);
    }
}
