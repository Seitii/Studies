<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Models\Usuario;
use Illuminate\Support\Facades\Request;

// Integra sistemas distintos ou partes diferentes de uma mesmo sistema, pode ser utilizado em qualquer sistema, só chamando a rota.
// Middleware -> Executa ações antes da rota ser executada.

Route::get('/', 'getAll');


Route::prefix('v1')->group(function(){
    Route::get('lista', function(){
        return Usuario::listar(10);
    });

    Route::post('cadastra', "API/UsuarioController@salvar");
});
 

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('segurados', 'API\SeguradosController');