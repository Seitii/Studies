<?php

/*
    Exceções
        -> Try catch finally
    -> Try = tenta executar o código
    -> Catch = captura a exceção
    -> Finally = executa o código independente de ter ou não exceção
*/

throw new Exception("Essa é uma exceção");

try { 
    throw new Exception("Essa é uma exceção");
} catch (Exception $e) {
    echo $e->getMessage();
    // é possivel retornar mensagens de logs. 
} finally {
    echo "Executou o bloco try catch";
    // Acompanha o log e ve o fluxo da aplicação. 
}

