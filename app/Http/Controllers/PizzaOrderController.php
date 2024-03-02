<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaOrderController extends Controller
{
    public function show(Pizza $id)
    {
        return Inertia::render('Pizza/Show', [
            'pizza' => $id,
        ]);
    }
}
