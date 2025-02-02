<?php


class Segurados extends Model
{
    protected $table = 'segurados';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nome',
        'cnpj',
        'cpf',
        'telefone',
        'email',
    ];

    public function enderecos()
    {
        return $this->hasMany(EnderecoSegurados::class, 'id_segurados', 'id');
    }
}