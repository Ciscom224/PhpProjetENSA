<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;

class FournisseurController extends Controller
{

    public function addFour(Request $request){
        return response()->json([
            'status'=>220,
            'message'=>'message bien recu'

        ]);
    }

    public function commande(Request $request){
        dd($request->input('designation'));
       $article=new Articles();
       $article->designation=$request->input('designation');
       $article->prix=100;
       $article->quantite=$request->input('quantity');
       $article->save();

       $mail=$request->input('mail');
        $notes=$request->input('notes');
        return response()->json([
            'status'=>808,
            'message'=>'Commande envoyé!!!'
        ]);
        // redirect('/mailPage')->with([
        //     'mail'=>$mail,
        //     'note'=>$notes
        // ]);

    }
    public function store(Request $request){

        $article=new Articles();
        $article->designation=$request->input('designation');
        $article->prix=100;
        $article->quantite=$request->input('quantity');
        $article->save();
        return response()->json([
            'status'=>808,
            'message'=>'Commande envoyé!!!'
        ]);
    }

}
