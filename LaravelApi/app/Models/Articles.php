<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use HasFactory;
    protected $primaryKey = 'article_id';
    protected $fillable=[
        'article_id',
        'designation',
        'prix',
        'quantite',
        'categorie'
    ];
}
