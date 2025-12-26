<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerificationDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'title',
        'image',
        'date',
    ];
    public function company()
    {
        return $this->belongsTo(Company::class,);
    }
}
