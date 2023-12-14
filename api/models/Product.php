<?php
// might need it later
// require_once __DIR__ . "//ProductInterface.php";
require_once __DIR__ . "//..//repositories//ProductRepository.php";
abstract class Product{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;

    public function __construct($sku, $name, $price, $type) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = (int)$price;
        $this->type = $type;
    }

    public function getSku() {
        return $this->sku;
    }

    public function setSKU($sku) {
        $this->sku = $sku;
    }

    public function getName() {
        return $this->name;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getPrice() {
        return $this->price;
    }

    public function setPrice($price) {
        $this->price = $price;
    }
    
    public function getType()
    {
        return $this->type;
    }
    public function add(PDO $conn) {
        $rep = new ProductRepository($conn);
        return $rep->add($this);
    }

    public function findById(PDO $conn) {
        $rep = new ProductRepository($conn);
        return $rep->findById($this);
    }

    public function exist(PDO $conn) {
        return Product::findById($conn) ? true : false;
    }

    public function delete(PDO $conn) {
        $rep = new ProductRepository($conn);
        return $rep->delete($this);
    }

    static public function fetchAll(PDO $conn) {
        return ProductRepository::fetchAll($conn);
    }

    static public function deleteBatch(PDO $conn, $keys) {
        return ProductRepository::deleteBatch($conn, $keys);
    }
}
