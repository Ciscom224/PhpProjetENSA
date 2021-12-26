<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventes', function (Blueprint $table) {
            $table->id();
            $table->integer('employe_id');
            $table->integer('article_id');
            $table->timestamps();
        });

        // Schema::table('ventes', function($table)
        // {
        //     $table->integer('employe_id');
        //     $table->foreign('employe_id')
        //                 ->references('employe_id')
        //                 ->on('employes')
        //                 ->onDelete('cascade')
        //                 ->onUpdate('cascade');

        //     $table->integer('article_id');
        //     $table->foreign('article_id')
        //                 ->references('article_id')
        //                 ->on('articles')
        //                 ->onDelete('cascade')
        //                 ->onUpdate('cascade');
        // });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ventes');
    }
}
