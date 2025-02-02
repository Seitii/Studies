<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('cadastro');
});

Route::get('/', 'UsuarioController@cadastrar')->name('home');
Route::post('/', 'UsuarioController@salvar')->name('salvar');

Route::match(['get', 'post'], '/'); // utiliza a rota junto passando a mesma rota. 
