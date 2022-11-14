<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\Provider;
use App\Models\Category;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
          'description' => $this->faker->text(10),
          'boughtPrice' => random_int(1,500),
          'profitPercent' => random_int(1,100),
          'quantity' => random_int(1,500),
          'provider_id' => Provider::inRandomOrder()->first()->id,
          'category_id' => Category::inRandomOrder()->first()->id
        ];
    }
}
