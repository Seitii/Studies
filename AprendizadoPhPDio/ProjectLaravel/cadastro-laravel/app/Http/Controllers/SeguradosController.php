<?php

use App\Http\Controllers\Controller;
use App\Models\Segurados;
use App\Models\EnderecoSegurados;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class SeguradosController extends Controller
{
    public function index()
    {
        return Segurados::with('enderecos')->get();
    }

    public function create()
    {

    }

    public function store(Request $request) // Cadastro do segurado e endereço do segurado.
    {
        DB::beginTransaction();

        try{ 
            $request['cnpj'] = remove_special_char($request->input('cnpj'));
            $request['cpf'] = remove_special_char($request->input('cpf'));
            $request['telefone'] = remove_special_char($request->input('telefone'));
            $data_end = $request->enderecos;
            
            $data = $this->validate($request, [
                'nome' => 'nullable',
                'cnpj' => 'nullable',
                'cpf' => 'nullable',
                'telefone' => 'nullable',
                'email' => 'nullable',
                'enderecos' => 'nullable',
            ]);

            $segurado = Segurados::create($data);

            if(isArrayNotEmpty($data_end)){
                $data_end['cep'] = remove_special_char($data_end['cep']);

                $endereco = new EnderecoSegurados();
                $endereco->fill($data_end);
                $endereco->id_segurados = $segurado->id;
                $endereco->save();
            }

            DB::commit();
            return ['message' => 'sucess'];
        }catch(\Exception $e){
            DB::rollBack();
            return ['message' => 'error', 'error' => $e->getMessage()];
        }
    }

    public function destroy($id)
    {
        try{
            $segurados = Segurados::findOrFail($id);
            $segurados->delete();

            return true;
        }catch(\Exception $e){
            return ['message' => 'error', 'error' => $e->getMessage()];
        }
    }
}