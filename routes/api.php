<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DeliveryDayController;
use App\Http\Controllers\ProviderController;
use App\Http\Controllers\SellController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\EnterpriseController;
use App\Http\Controllers\UsertypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(CategoryController::class)->group(function(){
    Route::get('/categories', 'index');
    Route::post('/category', 'store');
    Route::get('/category/{id}', 'show');
    Route::put('/category/{id}', 'update');
    Route::delete('/category/{id}', 'destroy');
    Route::get('/categorySearch', 'specific');
});

Route::controller(ProductController::class)->group(function(){
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show');
    Route::put('/product/{id}', 'update');
    Route::delete('/product/{id}', 'destroy');
    Route::get('/productSearch', 'specific');
});

Route::controller(SellController::class)->group(function(){
    Route::get('/sells', 'index');
    Route::post('/sell', 'store');
    Route::get('/sell/{id}', 'show');
    Route::put('/sell/{id}', 'update');
    Route::delete('/sell/{id}', 'destroy');
    Route::get('/sellSearch', 'specific');
});

Route::controller(ProviderController::class)->group(function(){
    Route::get('/providers', 'index');
    Route::post('/provider', 'store');
    Route::get('/provider/{id}', 'show');
    Route::put('/provider/{id}', 'update');
    Route::delete('/provider/{id}', 'destroy');
    Route::get('/providerSearch', 'specific');
});

Route::controller(PurchaseController::class)->group(function(){
    Route::get('/purchases', 'index');
    Route::post('/purchase', 'store');
    Route::get('/purchase/{id}', 'show');
    Route::put('/purchase/{id}', 'update');
    Route::delete('/purchase/{id}', 'destroy');
    Route::get('/purchaseSearch', 'specific');
});

Route::controller(DeliveryDayController::class)->group(function(){
    Route::get('/deliverys', 'index');
    Route::post('/delivery', 'store');
    Route::get('/delivery/{id}', 'show');
    Route::put('/delivery/{id}', 'update');
    Route::delete('/delivery/{id}', 'destroy');
    Route::get('/deliverySearch', 'specific');
});

Route::controller(UsertypeController::class)->group(function(){
    Route::get('/types', 'index');
    Route::post('/type', 'store');
    Route::get('/type/{id}', 'show');
    Route::put('/type/{id}', 'update');
    Route::delete('/type/{id}', 'destroy');
    Route::get('/typeSearch', 'specific');
});

Route::controller(UserController::class)->group(function(){
    Route::get('/users', 'index');
    Route::post('/user', 'store');
    Route::get('/user/{id}', 'show');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
    Route::get('/userSearch', 'specific');
});

Route::controller(EnterpriseController::class)->group(function(){
    Route::get('/enterprises', 'index');
    Route::post('/enterprise', 'store');
    Route::get('/enterprise/{id}', 'show');
    Route::put('/enterprise/{id}', 'update');
    Route::delete('/enterprise/{id}', 'destroy');
    Route::get('/enterpriseSearch', 'specific');
});