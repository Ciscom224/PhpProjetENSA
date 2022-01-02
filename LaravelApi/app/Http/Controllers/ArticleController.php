<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles=Articles::all();
        return response()->json([
            'articles'=>$articles,
            'status'=>201,
            'message'=>'vous  trouverez tout les articles ici'
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
    public function store(Request $request)
    {
        $article=new Articles();

        $article->article_id=$request->input('ref');
        $article->designation=$request->input('design');
        $article->prix=$request->input('prix');
        $article->quantite=$request->input('qt');
        $article->categorie=(int)$request->input('cat');
        $article->save();
        return response()->json([
            'status'=>202,
            'message'=>'Produit ajouté!!!'
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
        $article=DB::select('select * from articles where article_id = ?',$id);
        return response()->json([
            'status'=>404,
            'article'=>$article,
            'message'=>'affichage article courant'
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
        //
       DB::delete('delete articles where article_id = ?', $id);

       return response()->json([
           'status'=>401,
           'message'=>'suppression article courant'
       ]);

    }
}
