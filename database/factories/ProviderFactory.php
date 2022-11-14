<?php

namespace Database\Factories;

use App\Models\Provider;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Enterprise;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Provider>
 */
class ProviderFactory extends Factory
{

    protected $model = Provider::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'last_name' => $this->faker->lastName(),
            'cellphone' => $this->faker->unique()->phoneNumber(),
            'enterprise_id'=> Enterprise::inRandomOrder()->first()->id
        ];
    }
}
