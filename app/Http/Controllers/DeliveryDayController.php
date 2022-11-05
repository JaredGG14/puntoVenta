<?php

namespace App\Http\Controllers;

use App\Models\DeliveryDay;
use Illuminate\Http\Request;

class DeliveryDayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $delivery = DeliveryDay::all();
        return $delivery;
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
            "provider_id" =>"required",
            "day" => "required"
        ]);
        $deliverD = new DeliveryDay();
        $deliverD->provider_id=$request->provider_id;
        $deliverD->day=$request->day;
        $deliverD->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DeliveryDay  $deliveryDay
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $deliveryD = DeliveryDay::find($id);
        return $deliveryD;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DeliveryDay  $deliveryDay
     * @return \Illuminate\Http\Response
     */
    public function edit(DeliveryDay $deliveryDay)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DeliveryDay  $deliveryDay
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            "id" => "required",
            "provider_id" =>"required",
            "day" => "required",
        ]);
        $deliverD = DeliveryDay::findOrFail($request->id);
        $deliverD->provider_id=$request->provider_id;
        $deliverD->day=$request->day;
        $deliverD->save();
        return $deliverD;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DeliveryDay  $deliveryDay
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DeliveryDay::destroy($id);
    }
}
