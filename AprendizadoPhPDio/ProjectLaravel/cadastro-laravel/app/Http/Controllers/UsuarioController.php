<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsuarioController extends Controller
{
    public function cadastrar()
    {
        return view('views.cadastro');
    }

    public function cadastrarApi(Request $request) : Response
    {
        $data = $request->request->all();

        $usuario = new Usuario;
        $usuario->setNome($data['nome']);
        $usuario->setEmail($data['email']);

        $doctrine = $this->getDoctrine()->getManager();
        $doctrine->persist($usuario);
        $doctrine->flush();

        if($doctrine->contains($usuario)){
            return new Response("ok", 200);
        }else{ 
            return new Response("Erro", 400);
        }
    }

    public function lista() : JsonResponse
    {
        $doctrine = $this->getDoctrine()->getRepository(Usuario::class);

        dump($doctrine->findAll());

        //  pega todos os regstros da

        return new JsonResponse(["Implemetar Lista na Api"], 404);
    }

    public function salvar(Request $request){

        $request->validate([
            "nome"   => "required|string",
            "email" => "required|email", 
        ]);

        if(Usuario::cadastrar($request)){
            return view('usuario.sucesso');
        } else{
            echo "Erro ao cadastrar";
        }

        //dd($request->all());

        return view('usuario.acesso');
    }
}
