<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id('message_id')->unique();
            $table->string('titre');
            $table->text('contenu');
            $table->timestamps();
        });

        Schema::table('messages', function($table)
        {
            $table->integer('employe_id');
            $table->foreign('employe_id')
                        ->references('matricule')
                        ->on('employes')
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
        Schema::dropIfExists('messages');
    }
}
