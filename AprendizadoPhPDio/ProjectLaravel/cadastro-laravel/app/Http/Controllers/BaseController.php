<?php

class BaseController
{
    public function __call($name, $arguments)
    {
        $this->sendOutput('', array('HTTP/1.1 404 Not Found'));
    }


    protected function getStringParams()
    {
        parse_str($_SERVER['QUERY_STRING'], $query); 
        return $query; // retorna um array com os parametros da URL
    }

    protected function sendOutput($data, $httpHeaders=array())
    {
        header_remove('Set-Cookie'); // remove o cabeçalho de cookie

        if(is_array($httpHeaders) && count($httpHeaders)) {
            foreach($httpHeaders as $httpHeader) {
                header($httpHeader);
            } // adiciona os cabeçalhos HTTP
        }
        echo $data;
        exit;
    }
}