<?php
    require_once __DIR__ . "\\..\\models\\ProductInterface.php";
    require_once __DIR__ . "\\DVDRepository.php";
    require_once __DIR__ . "\\BookRepository.php";
    require_once __DIR__ . "\\FurnitureRepository.php";
    class ProductRepository {
    private $conn;

    public function __construct(PDO $conn) {
        $this->conn = $conn;
    }

    public function add(ProductInterface $product) {
        // print_r($product);
        try {
            $stmt = $this->conn->prepare("INSERT INTO products (sku, name, price, type) VALUES (:sku, :name, :price  + 0.0, :type)");
            $stmt->bindValue(':sku', $product->getSKU(), PDO::PARAM_STR);
            $stmt->bindValue(':name', $product->getName(), PDO::PARAM_STR);
            $stmt->bindValue(':price', $product->getPrice(), PDO::PARAM_STR);
            $stmt->bindValue(':type', $product->getType(), PDO::PARAM_STR);
            $stmt->execute();
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return false;
        }
        return true;
    }
    // dont need this 
    public function findById(ProductInterface $product){
        try {
            $stmt = $this->conn->prepare("SELECT * FROM products WHERE sku = :sku");
            $stmt->bindValue(':sku', $product->getSKU(), PDO::PARAM_STR);
            $stmt->execute();

            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            return $result ? $result : null;
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return null;
        }
    }

    public function delete(ProductInterface $product) {
        try {
            $stmt = $this->conn->prepare("DELETE FROM products WHERE sku = :sku");
            $stmt->bindValue(':sku', $product->getSKU(), PDO::PARAM_STR);
            $stmt->execute();
        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            return false;
        }
        return true;
    }
    public static function fetchAll(PDO $conn) {
        $res1 = DVDRepository::fetchAll($conn);
        $res2 = BookRepository::fetchAll($conn);
        $res3 = FurnitureRepository::fetchAll($conn);
        if((!is_array($res1) && !$res1 ) || (!is_array($res2) && !$res2 ) || (!is_array($res3) && !$res3 ) ) return false;
        return array_merge($res1, $res2, $res3);
    }
    public static function deleteBatch(PDO $conn, $keys) {
        $conn->beginTransaction();
        $res1 = DVDRepository::deleteBatch($conn, $keys);
        $res2 = BookRepository::deleteBatch($conn, $keys);
        $res3 = FurnitureRepository::deleteBatch($conn, $keys);
        
        if(!$res1 || !$res2 || !$res3){
            $conn->rollBack();
            return false;
        }
        try {
            $placeholders = implode(', ', array_map(function ($index) {
                return ':sku' . ($index + 1);
            }, array_keys($keys)));

            $stmt = $conn->prepare("DELETE FROM products WHERE sku IN ($placeholders)");
            foreach ($keys as $index => $key) {
                $stmt->bindValue(':sku' . ($index + 1), $key, PDO::PARAM_STR);
            }
            $stmt->execute();

        } catch (\Exception $e) {
            // echo "Error: " . $e->getMessage();
            $conn->rollBack();
            return false;
        }
        $conn->commit();
        return true;
    }    
}
?>