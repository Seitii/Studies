<?php

class Database
{
    // Select dos dados pegando direto no arquivo json
    public function select(int $limit)
    {
        try{
            $users = json_decode(file_get_contents(DATABASE_FILE) , true);
            $users = array_slice($users, 0, $limit); // Filtra de acordo com o limitando a quantidade de registros
            return $users; // retorna em formato de array
        }catch(Exception $e)
        {
            throw new Exception($e->getMessage());
        }
        return false;
    }


}