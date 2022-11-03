<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Provider extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'last_name',
        'cellphone',
        'enterprise_id'
    ];

    public function products(){
        return $this->hasMany(Product::class);
    }
}
