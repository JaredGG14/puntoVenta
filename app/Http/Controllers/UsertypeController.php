<?php

namespace App\Http\Controllers;

use App\Models\Usertype;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsertypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userT = UserType::all();
        return $userT;
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
            'userType' => 'requiered'
        ]);
        $userT = new UserType();
        $userT->userType = $request->userType;
        $userT->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usertype  $usertype
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $userT = UserType::find($id);
        return $userT;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Usertype  $usertype
     * @return \Illuminate\Http\Response
     */
    public function edit(Usertype $usertype)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usertype  $usertype
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'userType' => 'requiered'
        ]);
        $userT = UserType::findOrFail($request->id);
        $userT->userType = $request->userType;
        $userT->save();
        return $userT;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usertype  $usertype
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        UserType::destroy($id);
    }

    public function specific(Request $request){
        $types = DB::table('usertypes')
                    ->where('userType', '=', $request->userType)
                    ->orWhere('id', '=', $request->id)
                    ->get();
        return $types;
    }

}
