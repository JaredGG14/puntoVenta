<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $providers = Provider::all();
        return $providers;
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
            "name" => "required|string|min:0|max:100",
            "last_name" => "required|string|min:0|max:100",
            "cellphone" => "required|min:0",
            "enterprise_id" => "required"
        ]);
        $provider = new Provider();
        $provider->name=$request->name;
        $provider->last_name=$request->last_name;
        $provider->cellphone=$request->cellphone;
        $provider->enterprise_id=$request->enterprise_id;
        $provider->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $provider = Provider::find($id);
        return $provider;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function edit(Provider $provider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Provider $provider)
    {
        $request->validate([
            "name" => "required|string|min:5|max:40",
            "last_name" => "required|string|min:5|max:40",
            "cellphone" => "required|numeric|min:0",
            "quantity" => "required|min:0",
            "provider_id" => "required",
            "category_id" => "required"
        ]);
        $provider = Provider::findOrFail($request->id);
        $provider->name=$request->name;
        $provider->last_name=$request->last_name;
        $provider->cellphone=$request->cellphone;
        $provider->enterprise_id=$request->enterprise_id;
        $provider->save();
        return $provider;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Provider::destroy($id);
    }

    public function specific(Request $request){
        $providers = DB::table('providers')
                    ->where('name', '=', $request->name)
                    ->orWhere('id', '=', $request->id)
                    ->orWhere('last_name', '=', $request->last_name)
                    ->orWhere('cellphone', '=', $request->cellphone)
                    ->orWhere('enterprise_id','=',$request->enterprise_id)
                    ->get();
        return $providers;
    }
}
