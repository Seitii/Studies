<?php

/*

*/

declare(strict_types=1); // declaração de tipo estrito

class Produto
{
    private $conexao;

    public function __construct()
    {
        try{
            $this->conexao = new PDO('mysql:host=localhost;dbname=aula', 'root', '');
        }catch(Exception $e){
            echo 'Erro: ' . $e->getMessage();
            die();
        }	
    }

    public function list()
    {
        $query = 'select * from produtos';

        echo('<h3>Produtos:</h3>');

        foreach($this->conexao->query($query) as $key => $value) {
            echo 'Id: ' . $value['id'] . '<br> Descrição: ' . $value['descricao'] . '<br> Quantidade: ' . $value['quantidade'] . '<br> Valor: ' . $value['valor'] . '<br><br>';
        }
    }

    public function insert(string $descricao)
    {
        $query = 'insert into produtos(descricao) values(?)';

        $prepare = $this->conexao->prepare($query);

        $prepare->bindParam(1, $descricao); 
        $prepare->execute();

        echo $prepare->rowCount();
    }

    public function update(string $descricao, int $id)
    {

        $query = 'update produtos set descricao = ? where id = ?';

        $prepare = $this->conexao->prepare($query);

        $prepare->bindParam(1, $descricao);
        $prepare->bindParam(2, $id);

        $prepare->execute(); 

        echo $prepare->rowCount();
    }

    public function delete()
    {
        $query = 'delete from produtos where id = ?';


        $prepare = $this->conexao->prepare($query);

        $prepare->bindParam(1, $_GET['id']);
        $prepare->execute();

        echo $prepare->rowCount();
        
    }
}