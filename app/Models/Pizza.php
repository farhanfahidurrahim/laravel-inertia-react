<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\Cast;

class Pizza extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'toppings' => 'array',
    ];

    public function getUser()
    {
        return $this->belongsTo(User::class);
    }
}