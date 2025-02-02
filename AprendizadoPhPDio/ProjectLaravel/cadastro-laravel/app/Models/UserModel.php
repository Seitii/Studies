<?php

require_once ROOT_PATH . '/model/Database.php';

class UserModel extends Database
{
    public function getUsers(int $limit)
    {
        return $this->select($limit); // Chama o método select da classe Database
    }
}