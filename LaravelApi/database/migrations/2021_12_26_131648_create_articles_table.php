<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->integer('article_id')->unique();
            $table->string('designation');
            $table->float('prix');
            $table->timestamps();
        });

        Schema::table('articles', function($table)
        {
            $table->integer('categorie_id');
            $table->foreign('categorie_id')
                        ->references('categorie_id')
                        ->on('categories');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
