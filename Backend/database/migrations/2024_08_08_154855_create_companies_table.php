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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('city_id')->constrained('cities')->onDelete('cascade');
            $table->string('name')->nullable();
            $table->string('logo')->nullable();
            $table->string('country')->nullable();
            $table->string('contact')->nullable();
            $table->string('address')->nullable();
            $table->string('industry')->nullable();
            $table->string('type')->nullable();
            $table->integer('trust_point')->default(0);
            $table->integer('review')->default(0);
            $table->text('desc')->nullable();
            $table->integer('points')->default(0);
            $table->enum('status',['active','inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('companies');
    }
};
