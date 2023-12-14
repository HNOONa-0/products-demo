<?php

class DBConnection
{
    private $host = 'fdb1032.awardspace.net';
    private $dbname = '4415656_products';
    private $username = '4415656_products';
    private $password = '3@bCdeFg';
    private $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    );
    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' .$this->host .';dbname=' . $this->dbname, $this->username, $this->password, $this->options);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
    public function init()
    {
        try {
            // we cant use dsn as our database has not been yet given a name
            $conn = new PDO("mysql:host=$this->host", $this->username, $this->password, $this->options);
            // get the query from our file to execute on php
            $sql = file_get_contents(__DIR__ . "//data//init.sql");
            // use connection to execute query
            $conn->exec($sql);
            echo "created tables succesfully";
            return true;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
