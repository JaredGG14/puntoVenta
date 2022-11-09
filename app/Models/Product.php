<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Provider;
use App\Models\Category;

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

    public function providers(){
        return $this->belongsTo(Provider::class,'provider_id');
    }

    public function categories(){
        return $this->belongsTo(Category::class,'category_id');
    }

    public function carts(){
        return $this->belongsTo(Cart::class,'product_id');
    }
}