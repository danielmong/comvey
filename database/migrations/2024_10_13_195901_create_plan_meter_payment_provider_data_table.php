<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plan_meter_payment_provider_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId('plan_meter_id')->constrained('plan_meters');
            $table->foreignId('payment_provider_id')->constrained();
            $table->string('payment_provider_plan_meter_id')->nullable();
            $table->json('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plan_meter_payment_provider_data');
    }
};
