<?php
    require_once "Product.php";
    class Furniture extends Product {
        private $length;
        private $width;
        private $height;
        
        public function __construct($sku, $name, $price, $length, $width, $height) {
            parent::__construct($sku, $name, $price);
            $this->length = $length;
            $this->width = $width;
            $this->height = $height;
        }
        public function getLength() {
            return $this->length;
        }
    
        public function setLength($length) {
            $this->length = $length;
        }
    
        public function getWidth() {
            return $this->width;
        }
    
        public function setWidth($width) {
            $this->width = $width;
        }
    
        public function getHeight() {
            return $this->height;
        }
    
        public function setHeight($height) {
            $this->height = $height;
        }
    }
?>