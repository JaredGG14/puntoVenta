<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Provider;

class DeliveryDay extends Model
{
    use HasFactory;
    protected $fillable=[
        'provider_id',
        'day'];

    public function providers(){
        $this->belongsTo(Provider::class, 'providers_id');
    }
}