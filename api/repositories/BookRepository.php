<?php

// might use product type
// require_once __DIR__ . "\\..\\models\\Product.php";
class BookRepository
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function add($book)
    {
        try {
            $stmt = $this->conn->prepare("INSERT INTO books (sku, weight) VALUES (:sku, :weight + 0)");
            $stmt->bindValue(':sku', $book->getSku(), PDO::PARAM_STR);
            $stmt->bindValue(':weight', $book->getWeight(), PDO::PARAM_INT);
            $stmt->execute();
            return true;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
        
    }

    public function findById($book)
    {
        try {
            $stmt = $this->conn->prepare("SELECT * FROM books WHERE sku = :sku");
            $stmt->bindValue(':sku', $book->getSku(), PDO::PARAM_STR);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result ? $result : false;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }

    public function delete($book)
    {
        try {
            $stmt = $this->conn->prepare("DELETE FROM books WHERE sku = :sku");
            $stmt->bindValue(':sku', $book->getSku(), PDO::PARAM_STR);
            $stmt->execute();
            return true;
        } catch (\Exception $e) {
        // echo "Error: " . $e->getMessage();
            return null;
        }
    }
    public static function fetchAll($conn)
    {
        try {
            $stmt = $conn->query("
                SELECT p.*, b.weight
                FROM books b
                JOIN products p ON b.sku = p.sku
            ");
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $result === false ? [] : $result;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }
    public static function deleteBatch(PDO $conn, array $keys)
    {
        try {
            $placeholders = implode(', ', array_map(function ($index) {
                return ':sku' . ($index + 1);
            }, array_keys($keys)));
            $stmt = $conn->prepare("DELETE FROM books WHERE sku IN ($placeholders)");
            foreach ($keys as $index => $key) {
                $stmt->bindValue(':sku' . ($index + 1), $key, PDO::PARAM_STR);
            }
            $stmt->execute();
            return true;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }
}
