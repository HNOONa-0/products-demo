<?php

require_once __DIR__ . "//..//models//ProductInterface.php";
// might not use this
interface RepositoryInterface
{
    public function add(ProductInterface $book);
    public function findById(ProductInterface $book);
    public function delete(ProductInterface $book);
    public static function fetchAll(PDO $conn);
    public static function deleteBatch(PDO $conn, array $keys);
}
