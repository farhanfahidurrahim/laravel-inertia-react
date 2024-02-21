<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PizzaController extends Controller
{
    public function index()
    {
        $pizzas = Pizza::all();

        return Inertia::render('Pizza/Index', [
            'pizzas' => $pizzas,
        ]);
    }

    public function show()
    {
        return Pizza::all();
    }

    public function create()
    {
        return Pizza::all();
    }

    public function edit()
    {
        return Pizza::all();
    }

    public function update()
    {
        return Pizza::all();
    }
}
