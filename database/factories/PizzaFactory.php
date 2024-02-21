<?php

namespace Database\Factories;

use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $toppingChoices = [
            'Extra Cheese',
            'Black Olives',
            'Pepperoni',
            'Sausage',
            'Onion',
            'Chicken',
            'Beef',
        ];

        $toppings = [];
        for ($i = 1; $i < rand(1, 4); $i++) {
            $toppings[] = Arr::random($toppingChoices);
        }

        $toppings = array_unique($toppings);

        return [
            'user_id' => rand(1, 10),
            'size' => Arr::random(['Small', 'Medium', 'Large']),
            'crust' => Arr::random(['Normal', 'Thin', 'Garlic']),
            // 'toppings' => json_encode($toppings),
            'toppings' => $toppings,
            'status' => Arr::random(['Ordered', 'Preparing', 'Baking', 'Checking', 'Ready']),
        ];
    }
}