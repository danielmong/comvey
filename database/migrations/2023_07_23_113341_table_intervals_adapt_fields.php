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
        Schema::table('intervals', function (Blueprint $table) {
            $table->dropColumn('date_diff');
            $table->string('date_identifier');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('intervals', function (Blueprint $table) {
            $table->string('date_diff');
            $table->dropColumn('date_identifier');
        });
    }
};
