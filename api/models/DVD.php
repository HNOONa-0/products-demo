<?php

require_once __DIR__ . "//Product.php";
require_once __DIR__ . "//..//repositories//DVDRepository.php";

class DVD extends Product
{
    private $size;

    public function __construct($sku, $name, $price, $type, $size)
    {
        parent::__construct($sku, $name, $price, $type);
        $this->size = (int)$size;
    }

    public static function createFromObject($data)
    {
        return new self($data->sku, $data->name, $data->price, $data->type, $data->size,);
    }

    public function getSize()
    {
        return $this->size;
    }

    public function setSize($size)
    {
        $this->size = $size;
    }

    public function add(PDO $conn)
    {
        $conn->beginTransaction();
        $res1 = parent::add($conn);
        $rep = new DVDRepository($conn);
        $res2 = $rep->add($this);
        if (!$res1 || !$res2) {
            $conn->rollBack();
            echo $res1 . $res2;
            return false;
        }

        $conn->commit();
        return true;
    }

    public function findById(PDO $conn)
    {
        $rep = new DVDRepository($conn);
        $res1 = parent::findById($conn);
        $res2 = $rep->findById($this);
        if (!$res1 || !$res2) {
            return null;
        }

        return array_unique(array_merge($res1, $res2), SORT_REGULAR);
    }

    public function delete(PDO $conn)
    {
        $conn->beginTransaction();
        $rep = new DVDRepository($conn);
        $res2 = $rep->delete($this);
        $res1 = parent::delete($conn);
        if (!$res1 || !$res2) {
            $conn->rollBack();
            return false;
        }

        $conn->commit();
        return true;
    }
    
    public static function fetchAll(PDO $conn)
    {
        return DVDRepository::fetchAll($conn);
    }
}
