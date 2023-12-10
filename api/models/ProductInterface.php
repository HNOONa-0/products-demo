<?php
    // need it for cyclic import safety
    interface ProductInterface {
        public function getSKU();
        public function getName();
        public function getPrice();
        public function getType();
    }
?>