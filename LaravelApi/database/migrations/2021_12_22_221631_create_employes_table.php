<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employes', function (Blueprint $table) {
            $table->id();
            $table->integer('Matricule')->unique;
            $table->string('Nom');
            $table->string('prenom');
            $table->string('pass');
            $table->integer('connecte')->default(0);
            $table->timestamps();
        });

        Schema::table('employes', function($table)
        {
            $table->string('caisse_id');
            $table->foreign('caisse_id')
                        ->references('caisse_id')
                        ->on('caisses')
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
        Schema::dropIfExists('employes');
    }
}
