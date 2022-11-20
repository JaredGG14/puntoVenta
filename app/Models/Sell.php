<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Sell extends Model
{
    use HasFactory;
    protected $fillable=[
        'total',
        'user_id'
    ];

    protected $with = ['users'];

    public function users(){
        return $this->belongsTo(User::class,'user_id', 'id');
    }
}
