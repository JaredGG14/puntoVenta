<?php

namespace App\Http\Controllers;

use App\Models\Enterprise;
use Illuminate\Http\Request;


class EnterpriseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $enterprises = Enterprise::all();
        return $enterprises;
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
            "name" =>"required|string|min:5|max:25"
        ]);
        $enterprise = new Enterprise();
        $enterprise->name = $request->name;
        $enterprise->save(); 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Enterprise  $enterprise
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $enterprise = Enterprise::find($id);
        return $enterprise;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Enterprise  $enterprise
     * @return \Illuminate\Http\Response
     */
    public function edit(Enterprise $enterprise)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Enterprise  $enterprise
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Enterprise $enterprise)
    {
        $request->validate([
            "name" =>"required|string|min:5|max:25",
            "id" => "required"
        ]);
        $enterprise = Enterprise::findOrFail($request->id);
        $enterprise->name = $request->name;
        $enterprise->save();
        return $enterprise;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Enterprise  $enterprise
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Enterprise::destroy($id);
    }
}
