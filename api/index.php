<?php
    require "Book.php";
    require "DVD.php";
    require "DBConnection.php";
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    // include 'DBConnection.php';
    // $method = $_SERVER['REQUEST_METHOD'];
    // $data = json_decode(file_get_contents("php://input"));
    // print_r($data);
    // $dbConn = new DBConnection();
    // $conn = $dbConn->connect();

    $data = file_get_contents("php://input");
    $obj = json_decode($data,true);
    echo $data["sku"];
    // $jsonobj=json_decode($data);
    // echo $jsonobj;
    // $product = json_decode( );
    // echo $product->sku;
    // $product = json_decode($json_data);
    // $sql = "INSERT INTO products (sku, name, price) VALUES (:sku, :name, :price)";
    // echo $product->sku;
    // echo $product->name;
    // echo $product->price;

    // $stmt = $conn->prepare($sql);
    // $stmt->bindParam(':sku', $product->sku, PDO::PARAM_STR);
    // $stmt->bindParam(':name', $product->name, PDO::PARAM_STR);
    // $stmt->bindParam(':price', $product->price, PDO::PARAM_INT);

    // if($stmt->execute()) {
    //     $response = ['status' => 1, 'message' => 'Record created successfully.'];
    // } else {
    //     $response = ['status' => 0, 'message' => 'Failed to create record.'];
    // }
    // echo json_encode($response);
    // echo "succesfully created";
?>