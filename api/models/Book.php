<?php

require_once __DIR__ . "//Product.php";
require_once __DIR__ . "//..//repositories//BookRepository.php";

class Book extends Product
{
    private $weight;

    public function __construct($sku, $name, $price, $type, $weight)
    {
        parent::__construct($sku, $name, $price, $type);
        $this->weight = (int)$weight;
    }

    public static function createFromObject($data)
    {
        return new self(
            $data->sku,
            $data->name,
            $data->price,
            $data->type,
            $data->weight,
        );
    }

    public function getWeight()
    {
        return $this->weight;
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

    public function add(PDO $conn)
    {
        $conn->beginTransaction();

        $res1 = parent::add($conn);
        $rep = new BookRepository($conn);
        $res2 = $rep->add($this);

        if (!$res1 || !$res2) {
            $conn->rollBack();
            return false;
        }

        $conn->commit();
        return true;
    }

    public function findById(PDO $conn)
    {
        $rep = new BookRepository($conn);
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

        $rep = new BookRepository($conn);
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
        return BookRepository::fetchAll($conn);
    }
}
