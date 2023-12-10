<?php
require_once __DIR__ . "\\..\\repositories\\ProductRepository.php";
require_once __DIR__ . "\\ProductInterface.php";
class Product  implements ProductInterface{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    // Constructor
    public function __construct($sku, $name, $price, $type) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->type = $type;
    }

    // Getter for SKU
    public function getSKU() {
        return $this->sku;
    }

    // Setter for SKU
    public function setSKU($sku) {
        $this->sku = $sku;
    }

    // Getter for Name
    public function getName() {
        return $this->name;
    }

    // Setter for Name
    public function setName($name) {
        $this->name = $name;
    }

    // Getter for Price
    public function getPrice() {
        return $this->price;
    }

    // Setter for Price
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

    // Find by ID method using ProductRepository
    public function findById(PDO $conn) {
        $rep = new ProductRepository($conn);
        return $rep->findById($this);
    }

    // Delete method using ProductRepository
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
?>
