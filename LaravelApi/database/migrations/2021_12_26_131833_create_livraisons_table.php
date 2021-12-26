<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLivraisonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livraisons', function (Blueprint $table) {
            $table->integer('qt');
            $table->timestamps();
        });


        Schema::table('livraisons', function($table)
        {
            $table->string('mail');
            $table->foreign('mail')
                        ->references('mail')
                        ->on('fournisseurs')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');

            $table->integer('article_id');
            $table->foreign('article_id')
                        ->references('article_id')
                        ->on('articles')
                        ->onDelete('cascade')
                        ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('livraisons');
    }
}
