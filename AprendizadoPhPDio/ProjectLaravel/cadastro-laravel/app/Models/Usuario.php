<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
// Comunica os dados com o banco de dados
// Eloquent = Biblioteca que mapeia os dados com o banco, querys, ORM. 

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class Usuario extends Model
{
    protected $connection   = "pgsql";
    protected $table        = "usuario";

    public static function listar(int $limite)
    {
        $sql = self::select([
            "id",
            "nome",
            "email",
            "senha",
        ])->limit($limite)
        ->get();

        return response()->json($sql);

        //dd($sql->toSql());
    }

    public function create(Request $request)
    {
        $sql = self::insert([
            "nome"  => $request->input("nome"),
            "email" => $request->input("email"),
            "senha" => $request->input("senha"),
            //"data_cadastro" => DB::raw("NOW()") // Pega data atual
        ]);

        dd($sql->toSql(), $request->all());
    }
}

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
