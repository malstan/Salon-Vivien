<?php
/**
 * Stanislav Malik
 * 2021
 * update ordering in database
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include ('../config/database.php');

$database = new Database();
$connection = $database->getConnection();

// get data for change
$data = json_decode(file_get_contents('php://input'));

foreach ($data as $item) {
    $query = "UPDATE dress SET ordering = :order WHERE id_dress = :id";

    $stmt = $connection->prepare($query);
    $stmt->bindParam(":order", $item->order);
    $stmt->bindParam(":id", $item->id);

    try {
        $stmt->execute();
    } catch (PDOException $exception) {
        http_response_code(500);
        echo json_encode(array("message" => $exception));
        return;
    }
}

http_response_code(200);
