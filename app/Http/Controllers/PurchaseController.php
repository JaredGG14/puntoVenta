<?php

namespace App\Http\Controllers;

use App\Models\Purchase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchases = Purchase::all();
        return $purchases;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            "total" => "required|numeric|min:0",
            "provider_id" => "required"
        ]);
        $purchase = new Purchase();
        $purchase->total =$request->total;
        $purchase->provider_id=$request->provider_id;
        $purchase->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $purchase = Purchase::find($id);
        return $purchase;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "total" => "required|numeric|min:0",
            "provider_id" => "required"
        ]);
        $purchase = Purchase::findOrFail($request->id);
        $purchase->total =$request->total;
        $purchase->provider_id=$request->provider_id;
        $purchase->save();
        return $purchase;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Purchase::destroy($id);
    }

    public function specific(Request $request){
        $purchases = DB::table('purchases')
                    ->where('total', '=', $request->total)
                    ->orWhere('id', '=', $request->id)
                    ->orWhere('provider_id', '=', $request->provider_id)
                    ->get();
        return $purchases;
    }
}
