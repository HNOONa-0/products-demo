<?php
    require "DBConnection.php";
    $dbObj=new DBConnection();
    $dbObj->init();
    $conn=$dbObj->connect();
    // var_dump($conn);
?>