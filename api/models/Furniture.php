<?php
    require_once __DIR__ . "\\Product.php";
    require_once __DIR__ . "\\..\\repositories\\FurnitureRepository.php";
    class Furniture extends Product {
        private $length;
        private $width;
        private $height;
        
        public function __construct($sku, $name, $price, $type, $length, $width, $height) {
            parent::__construct($sku, $name, $price, $type);
            $this->length = $length;
            $this->width = $width;
            $this->height = $height;
        }
        public static function createFromObject($data)
        {
            return new self(
                $data->sku ,
                $data->name ,
                $data->price ,
                $data->type ,
                $data->length ,
                $data->width ,
                $data->height ,
            );
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

        public function add(PDO $conn) {
            $conn->beginTransaction();
    
            $res1 = parent::add($conn);
    
            $rep = new FurnitureRepository($conn);
            $res2 = $rep->add($this);
    
            if (!$res1 || !$res2) {
                $conn->rollBack();
                echo $res1 . $res2;
                return false;
            }
    
            $conn->commit();
            return true;
        }
    
        public function findById(PDO $conn) {
            $rep = new FurnitureRepository($conn);
    
            $res1 = parent::findById($conn);
            $res2 = $rep->findById($this);
    
            if (!$res1 || !$res2) return null;
    
            return array_unique(array_merge($res1, $res2), SORT_REGULAR);
        }
        public function exist(PDO $conn) {
            return parent::findById($conn);
        }
        public function delete(PDO $conn) {
            $conn->beginTransaction();
    
            $rep = new FurnitureRepository($conn);
            $res2 = $rep->delete($this);
            $res1 = parent::delete($conn);
    
            if (!$res1 || !$res2) {
                $conn->rollBack();
                return false;
            }
    
            $conn->commit();
            return true;
        }
        static public function fetchAll(PDO $conn) {
            return FurnitureRepository::fetchAll($conn);
        }
    }
?>