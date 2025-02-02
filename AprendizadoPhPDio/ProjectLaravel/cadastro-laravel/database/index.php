<?php

require __DIR__ . "/config/config.php";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH); // pega a URI da requisição do cliente e armazena na variável $uri

$uri = explode('/', $uri); // divide a URI em um array de strings

if((isset($uri[1]) && $uri[1] != 'api') || (isset($uri[2]) && $uri[2] != 'api')){ // se a URI for diferente de 'api' ou 'api' não estiver presente na URI
    header("HTTP/1.1 404 Not Found"); // envia o cabeçalho HTTP 404 Not Found
    exit();
} else if((isset($uri[3]) && $uri[3] != 'user') && !isset($uri[4])){ // se a URI for igual a 'api' e não houver nada após 'api'
    header("HTTP/1.1 404 Not Found"); // envia o cabeçalho HTTP 400 Bad Request
    exit();
}

require ROOT_PATH . "/controller/UserController.php";

$user = new UserController();

$methodNmae = $uri[4] . "Action";

$user->{$methodNmae}();