<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FournisseurController extends Controller
{
    public function addFour(Request $request){
        return response()->json([
            'status'=>220,
            'message'=>'message bien recu'

        ]);
    }
}
