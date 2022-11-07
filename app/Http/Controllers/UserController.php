<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return $users;
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
            'name' => 'required|min:4|max:30',
            'last_name' => 'required|min:4|max:30',
            'email' => 'required|email',
            'cellphone' => 'required|numeric|min:10|max:10',
            'password' => 'required|min:8',
            'userType_id' => 'required'
            ]);
        $user = new User;
        $user-> name = $request->name;
        $user-> last_name = $request->last_name;
        $user-> password = bcrypt($request->password);
        $user-> cellphone = $request->cellphone;
        $user-> userType_id = $request->userType_id;
        $user->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|min:4|max:30',
            'last_name' => 'required|string|min:4|max:30',
            'email' => 'required|email',
            'cellphone' => 'required|numeric|min:10|max:10',
            'password' => 'required|min:8',
            'userType_id' => 'required'
            ]);
        $user = User::findOrFail($request->id);
        $user-> name = $request->name;
        $user-> last_name = $request->last_name;
        $user-> password = bcrypt($request->password);
        $user-> cellphone = $request->cellphone;
        $user-> userType_id = $request->userType_id;
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
    }

    public function specific(Request $request){
        $users = DB::table('users')
                    ->where('name', '=', $request->name)
                    ->orWhere('id', '=', $request->id)
                    ->orWhere('last_name', '=', $request->last_name)
                    ->orWhere('email', '=' , $request->email)
                    ->orWhere('cellphone', '=', $request->cellphone)
                    ->orWhere('userType_id','=',$request->userType_id)
                    ->get();
        return $users;
    }
}
