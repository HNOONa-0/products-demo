<?php

class DBConnection
{
    private $host = 'localhost';
    private $dbname = 'products';
    private $username = 'root';
    private $password = '';
    private $options = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    );

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->username, $this->password, $this->options);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }

    public function init()
    {
        try {
            // Use DIRECTORY_SEPARATOR to make the path cross-platform compatible
            $sqlFilePath = __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'init.sql';
            
            $conn = new PDO("mysql:host=$this->host", $this->username, $this->password, $this->options);
            
            // get the query from our file to execute on PHP
            $sql = file_get_contents($sqlFilePath);
            
            // use connection to execute query
            $conn->exec($sql);

            return true;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
