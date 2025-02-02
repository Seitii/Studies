<?php

require 'Produto.php';

$produto = new Produto();

switch($_GET['operacao']){
    case 'list':
        $produto->list();
        break;
    case 'insert':
        $status = $produto->insert('Produto 1');

        if(!$status){
            echo 'Erro ao inserir produto';
            return false; 
        }

        echo 'Produto inserido com sucesso';
        break;
    case 'update':
        $status = $produto->update('Produto 2', 1  );

        if(!$status){
            echo 'Erro ao atualizar produto';
            return false; 
        }

        echo 'Produto atualizar com sucesso';
        break;        
    case 'delete':
        $status = $produto->delete(1);

        if(!$status){
            echo 'Erro ao deletar produto';
            return false; 
        }

        echo 'Produto deletado com sucesso';
        break;    
}