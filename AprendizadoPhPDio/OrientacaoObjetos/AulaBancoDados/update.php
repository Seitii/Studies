<?php

declare(strict_types=1);

$pdo = require 'connect.php';
$sql = 'update produtos set descricao = ? where id = ?';

$prepare = $pdo->prepare($sql);

$prepare->bindParam(1, $_GET['descricao']); // passa aqui para não ter sql inject.
$prepare->bindParam(2, $_GET['id']);

$prepare->execute();

echo $prepare->rowCount();