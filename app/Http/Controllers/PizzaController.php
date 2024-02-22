<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller
{
    public function index(): Response
    {
        $pizzas = Pizza::all();

        return Inertia::render('Pizza/Index', [
            'pizzas' => $pizzas,
        ]);
    }

    public function show()
    {
    }

    public function create()
    {
        return Pizza::all();
    }

    public function edit(Pizza $id): Response
    {
        return Inertia::render('Pizza/Edit', [
            'pizza' => $id,
        ]);
    }

    public function update(Pizza $id, Request $request): void
    {
        $id->update([
            'status' => $request->status,
        ]);
    }
}
