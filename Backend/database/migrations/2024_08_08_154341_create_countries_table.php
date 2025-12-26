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
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('code', 2); // 'ZW'
            $table->string('name', 100); // 'ZIMBABWE'
            $table->string('full_name', 100); // 'Zimbabwe'
            $table->string('iso3', 3); // 'ZWE'
            $table->integer('number'); // 716
            $table->string('phone_code', 10); // '263'
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('countries');
    }
};
