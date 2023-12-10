<?php
    // define($_SERVER['DOCUMENT_ROOT'], __DIR__);
    // echo $_SERVER['DOCUMENT_ROOT'];
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    
    require_once __DIR__ . "\\models\\Product.php";
    include_once __DIR__ . "\\models\\Book.php";
    require_once __DIR__ . "\\models\\DVD.php";
    require_once __DIR__ . "\\models\\Furniture.php";
    require_once __DIR__ . "\\DBConnection.php";
    require_once __DIR__ . "\\ProductRegistry.php";

    $dbConn = new DBConnection();
    $conn = $dbConn->connect();
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "GET":
            $response = Product::fetchAll($conn);
            if(!is_array($response) ){
                http_response_code(500);
                $response = ['status' => 0, 'message' => 'Couldnt fetch products.'];
            }
            break;
        
        case "POST":
            $dataObj=json_decode(file_get_contents("php://input") );
            $product=ProductRegistry::createProduct($dataObj->type,$dataObj);
            if($product->exist($conn) ){
                http_response_code(400);
                $response = ['status' => 0, 'message' => 'Record already exists.'];
                break;
            }
            if($product->add($conn) ){
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            }
            else{
                http_response_code(500);
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }        
            break;

        // case "PUT":
        //     break;

        case "DELETE":
            $keys=json_decode(file_get_contents("php://input") );
            if(!Product::deleteBatch($conn, $keys) ){
                http_response_code(500);
                $response = ['status' => 0, 'message' => 'Failed to delete selected records.'];
            }
            else{
                $response = ['status' => 1, 'message' => 'Succesfully deleted selected products.'];
            }
            break;
    }
    echo json_encode($response);
    
?>