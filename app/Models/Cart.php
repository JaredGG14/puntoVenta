<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable=[
        'product_id',
        'user_id'
    ];

    protected $with = ['products', 'users'];

    public function products(){
        return $this->hasMany(Product::class,'product_id','id');
    }
    public function users(){
        return $this->hasMany(User::class,'user_id','id');
    }
}
