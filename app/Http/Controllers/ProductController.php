<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Provider;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return $products;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            "description" => "required|string|min:0|max:150",
            "boughtPrice" => "required|numeric|min:0",
            "profitPercent" => "required|numeric|min:0",
            "quantity" => "required|numeric|min:0",
            "provider_id" => "required",
            "category_id" => "required"
        ]);

        
        $products = new Product();
        $products->descrption=$request->description;
        $products->bougthPrice=$request->boughtPrice;
        $products->profitPercent=$request->profitPercent;
        $products->quantity=$request->quantity;
        $products->provider_id=$request->provider_id;
        $products->category_id=$request->category_id;
        $products->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product = Product::findOrFail($request->id);
        $product->descrption=$request->description;
        $product->bougthPrice=$request->boughtPrice;
        $product->profitPercent=$request->profitPercent;
        $product->quantity=$request->quantity;
        $product->provider_id=$request->provider_id;
        $product->category_id=$request->category_id;
        $product->save();
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::destroy($id);
    }
}
