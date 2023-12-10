<?php

abstract class Product {
    protected $sku;
    protected $name;
    protected $price;

    // Constructor
    public function __construct($sku, $name, $price) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
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
}
?>
