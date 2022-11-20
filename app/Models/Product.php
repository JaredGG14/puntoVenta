<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Provider;
use App\Models\Category;
use App\Models\Cart;

class Product extends Model
{
    use HasFactory;
    protected $fillable=[
        'description',
        'boughtPrice',
        'profitPercent',
        'quantity',
        'provider_id',
        'category_id',
    ];

    protected $with = ['providers', 'categories', 'carts'];

    public function providers(){
        return $this->belongsTo(Provider::class,'provider_id', 'id');
    }

    public function categories(){
        return $this->belongsTo(Category::class,'category_id', 'id');
    }

    public function carts(){
        return $this->belongsTo(Cart::class,'product_id', 'id');
    }
}