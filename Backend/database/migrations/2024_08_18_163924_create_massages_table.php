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
        Schema::create('massages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('to_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('from_id')->constrained('users')->onDelete('cascade');
            $table->string('massage');
            $table->foreignId('reply_id')->nullable()->constrained('massages')->onDelete('cascade');
            $table->boolean('is_read')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('massages');
    }
};
