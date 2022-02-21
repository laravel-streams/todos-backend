<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Streams\Core\Support\Facades\Streams;

class TestCommand extends Command
{
    protected $signature = 'test';

    protected $description = '';

    public function handle()
    {
        $stream = Streams::make('todos');

        $arr = $stream->toArray();

        return;
    }
}
