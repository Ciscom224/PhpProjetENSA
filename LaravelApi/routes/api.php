<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\FournisseurController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::match(['post','get'],'/employe/store',[EmployeController::class,'store']);
Route::match(['post','get'],'/employe/login',[EmployeController::class,'login']);
// ----------routing for article------------------
Route::match(['post','get'],'/produit/store',[ArticleController::class,'store']);
Route::match(['post','get'],'/article/list',[ArticleController::class,'index']);
Route::match(['post','get'],'/article/delete/{id}',[ArticleController::class,'destroy']);
Route::match(['post','get'],'/article/show/{id}',[ArticleController::class,'show']);
// --------------routing for fournissuer--------------------------
Route::match(['post','get'],'/fournis/add',[FournisseurController::class,'addFour']);
Route::match(['post','get'],'/fournis/commande',[FournisseurController::class,'commande']);
Route::match(['get','post'],'/commande',[FournisseurController::class,'store']);

// -------------Routing for the messages----------------
Route::match(['post','get'],'/message/store',[MessageController::class,'store']);
Route::match(['post','get'],'/message/list',[MessageController::class,'index']);
Route::match(['post','get'],'/message/{id}',[MessageController::class,'show']);
Route::match(['post','get'],'/message/destroy',[MessageController::class,'destroy']);


//-------------------Categorie----------------------
Route::match(['get', 'post'], '/categorie/{id}', [CategorieController::class,'show']);
Route::match(['get', 'post'], '/produit/listCat', [CategorieController::class,'statCat']);
