<?php

declare(strict_types=1);

$pdo = require 'connect.php';
$sql = 'select * from produtos';

echo '<h3>Produtos:</h3>';

foreach($pdo->query($sql) as $key => $value) {
    echo 'Id: ' . $value['id'] . '<br> Descrição: ' . $value['descricao'] . '<br> Quantidade: ' . $value['quantidade'] . '<br> Valor: ' . $value['valor'] . '<br><br>';
}