<?php

namespace App\Http\Controllers;

use App\Models\Sell;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SellController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sells = Sell::all();
        return $sells;
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
        $sells = new Sell();
        $sells->total = $request->total;
        $sells->user_id = $request->user_id;
        $sells->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sell  $sell
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sell = Sell::find($id);
        return $sell;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sell  $sell
     * @return \Illuminate\Http\Response
     */
    public function edit(Sell $sell)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sell  $sell
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            "total" => "required|numeric|min:0",
            "user_id" => "required"
        ]);
        $sell = Sell::findOrFail($request->id);
        $sell->total = $request->total;
        $sell->user_id = $request->user_id;
        $sell->save();
        return $sell;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sell  $sell
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Sell::destroy($id);
    }

    public function specific(Request $request){
        $sells = DB::table('sells')
                    ->where('total', '=', $request->total)
                    ->orWhere('id', '=', $request->id)
                    ->orWhere('user_id', '=', $request->user_id)
                    ->get();
        return $sells;
    }
}
