<?php

// require_once "DVD.php";
// require_once "Book.php";
// require_once "Furniture.php";

require_once __DIR__ . "//models//DVD.php";
require_once __DIR__ . "//models//Book.php";
require_once __DIR__ . "//models//Furniture.php";

class ProductRegistry
{
    private static $productTypes = [
        "DVD" => ['DVD', 'createFromObject'],
        "Book" => ['Book', 'createFromObject'],
        "Furniture" => ['Furniture', 'createFromObject']
    ];

    public static function registerProductType($type, $class)
    {
        self::$productTypes[$type] = $class;
    }

    public static function createProduct($type, $data)
    {
        if (isset(self::$productTypes[$type])) {
            list($className, $method) = self::$productTypes[$type];
            return call_user_func([$className, $method], $data);
        } else {
            throw new Exception("Unsupported product type: $type");
        }
    }
}
