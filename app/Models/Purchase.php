<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Provider;

class Purchase extends Model
{
    use HasFactory;
    protected $fillable=[
        'provider_id',
        'day'
    ];

    public function providers(){
        return $this->belongsTo(Provider::class,'provider_id');
    }
}
