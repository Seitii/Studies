<?php


/*
    Trabalhando com datas 
    Formatando data 
        -> format('d/m/Y H:i:s') = dia/mes/ano hora:minuto:segundo 
        -> format('d/m/Y') = dia/mes/ano

    DateInterval e DateTime
        -> DateInterval = Intervalo de tempo
*/

$data = new DateTime();

$intervalo  = new DateInterval('PT5M'); // P = Periodo, T = Time, 5M = 5 minutos

$data->add($intervalo);

echo $data->format('d/m/Y H:i:s');