<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $messages = DB::table('messages')
            ->join('employes', 'messages.employe_id', '=', 'employes.employe_id')
            ->select('employes.nom', 'employes.prenom', 'messages.*')
            ->get();
        return response()->json([
            'messages'=>$messages,
            'status'=>302,
        ]);
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
    public function store(Request $request,$exp)
    {
        $message=new  Messages();


        $message->titre=$request->input('titre');
        $message->contenu=$request->input('contenu');
        $message->employe_id=$exp;
        return response()->json([
            'status'=>211,
            'message'=>'message envoyer'

        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $message=Messages::find($id);

        return response()->json([
            'status'=>2020,
            'message'=>$message
        ]);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::delete('delete messages where message_id = ?',$id);
        return response()->json([
            'status'=>201,
            'message'=>'suppression de message'
        ]);
    }
}
