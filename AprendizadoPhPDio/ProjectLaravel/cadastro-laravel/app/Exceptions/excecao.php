<?php

function divisao($dividendo, $divisor)
{

    try{
        if($divisor == 0)
        {
            throw new RangeException("O NUmero não pode ser divido por 0");
        }

        $resultado = $dividendo / $divisor;
        echo "O resultado é" . $resultado;
    }catch(Exception $e)
    {
        echo "Erro: " . $e->getMessage();
    }finally
    {
        echo "Fim da execução"; // Executa independente de erro
    }
}

divisao(10, 0);