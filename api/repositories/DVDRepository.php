<?php
// might use product type
// require_once __DIR__ . "//..//models//Product.php";
class DVDRepository
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function add($dvd)
    {
        try {
            $stmt = $this->conn->prepare("INSERT INTO dvds (sku, size) VALUES (:sku, :size + 0)");
            $stmt->bindValue(':sku', $dvd->getSku(), PDO::PARAM_STR);
            $stmt->bindValue(':size', $dvd->getSize(), PDO::PARAM_INT);
            $stmt->execute();
            return true;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }

    public function findById($dvd)
    {
        try {
            $stmt = $this->conn->prepare("SELECT * FROM dvds WHERE sku = :sku");
            $stmt->bindValue(':sku', $dvd->getSku(), PDO::PARAM_STR);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result ? $result : false;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }

    public function delete($dvd)
    {
        try {
            $stmt = $this->conn->prepare("DELETE FROM dvds WHERE sku = :sku");
            $stmt->bindValue(':sku', $dvd->getSku(), PDO::PARAM_STR);
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
                SELECT p.*, d.size
                FROM dvds d
                JOIN products p ON d.sku = p.sku
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
            $stmt = $conn->prepare("DELETE FROM dvds WHERE sku IN ($placeholders)");
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
