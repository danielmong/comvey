<?php

namespace Database\Seeders\Testing;

use Database\Seeders\CurrenciesSeeder;
use Database\Seeders\IntervalsSeeder;
use Database\Seeders\PaymentProvidersSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlansSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // run only in testing environment
        if (app()->environment() !== 'testing') {
            return;
        }

        DB::table('plans')->upsert([
            [
                'name' => 'Basic',
                'slug' => 'basic',
                'interval_id' => 2,
                'interval_count' => 1,
                'trial_interval_id' => 1,
                'has_trial' => true,
                'product_id' => 1,
                'trial_interval_count' => 7,
                'is_active' => true,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s')
            ],
            [
                'name' => 'Pro',
                'slug' => 'pro',
                'interval_id' => 2,
                'interval_count' => 1,
                'trial_interval_id' => 1,
                'has_trial' => true,
                'product_id' => 1,
                'trial_interval_count' => 7,
                'is_active' => true,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s')
            ]

        ], ['slug'], ['name']);

        DB::table('plan_prices')->upsert([
            [
                'plan_id' => 1,
                'currency_id' => 1,
                'price' => 10,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s')
            ],
            [
                'plan_id' => 1,
                'currency_id' => 2,
                'price' => 20,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s')
            ],
            [
                'plan_id' => 2,
                'currency_id' => 1,
                'price' => 20,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s')
            ],
            [
                'plan_id' => 2,
                'currency_id' => 2,
                'price' => 40,
                'created_at' => now()->format('Y-m-d H:i:s'),
                'updated_at' => now()->format('Y-m-d H:i:s')
            ]
        ], ['plan_id', 'currency_id']);

    }
}
