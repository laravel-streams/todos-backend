<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Streams\Core\Support\Facades\Streams;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for($i=0; $i<50; $i++) {
            $todo = Streams::make('todos')->factory()->create([
                'editing' => false
            ]);
            $todo->save();
            dump($todo->getAttributes());
        }
    }
}
