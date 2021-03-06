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
            $table->integer('employe_id')->unique;
            $table->string('nom');
            $table->string('prenom');
            $table->string('pass');
            $table->integer('connecte')->default(0);
            $table->timestamps();
        });

        Schema::table('employes', function($table)
        {
            $table->integer('caisse_id')->nullable();
            $table->foreign('caisse_id')
                        ->references('caisse_id')
                        ->on('caisses');
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
