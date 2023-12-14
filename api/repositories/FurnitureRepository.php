<?php
// might use product type
// require_once __DIR__ . "//..//models//Product.php";
class FurnitureRepository
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function add($furniture)
    {
        try {
            $stmt = $this->conn->prepare("INSERT INTO furnitures (sku, height, width, length) VALUES (:sku, :height + 0, :width + 0, :length + 0)");
            $stmt->bindValue(':sku', $furniture->getSku(), PDO::PARAM_STR);
            $stmt->bindValue(':height', $furniture->getHeight(), PDO::PARAM_INT);
            $stmt->bindValue(':width', $furniture->getWidth(), PDO::PARAM_INT);
            $stmt->bindValue(':length', $furniture->getLength(), PDO::PARAM_INT);
            $stmt->execute();
            return true;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }

    public function findById($furniture)
    {
        try {
            $stmt = $this->conn->prepare("SELECT * FROM furnitures WHERE sku = :sku");
            $stmt->bindValue(':sku', $furniture->getSku(), PDO::PARAM_STR);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result ? $result : false;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }

    public function delete($furniture)
    {
        try {
            $stmt = $this->conn->prepare("DELETE FROM furnitures WHERE sku = :sku");
            $stmt->bindValue(':sku', $furniture->getSku(), PDO::PARAM_STR);
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
                SELECT p.*, f.height, f.width, f.length
                FROM furnitures f
                JOIN products p ON f.sku = p.sku
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
            $stmt = $conn->prepare("DELETE FROM furnitures WHERE sku IN ($placeholders)");
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
