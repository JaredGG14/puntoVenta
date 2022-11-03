<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\DeliveryDay;
use App\Models\Enterprise;

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
        return $this->hasMany(Product::class,'provider_id','id');
    }

    public function purchases(){
        return $this->hasMany(Purchase::class,'provider_id','id');
    }

    public function delivery_days(){
        return $this->hasMany(DeliveryDay::class,'provider_id','id');
    }

    public function enterprises(){
        return $this->belongsTo(Enterprise::class,'enterprise_id');
    }
}