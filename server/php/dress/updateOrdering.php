<?php
/**
 * Stanislav Malik
 * 2021
 * update ordering in database
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include('../config/database.php');

// check method
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(400);
    echo json_encode(array("message" => "Request is not a PUT."));
    return;
}

// get and check body
$data = json_decode(file_get_contents('php://input'));

if (!isset($data)) {
    http_response_code(400);
    echo json_encode(array("message" => "Content must have specific structure."));
    return;
}

// create, prepare query
$database = new Database();
$connection = $database->getConnection();

foreach ($data as $item) {
    $query = "UPDATE dress SET ordering = :order WHERE id_dress = :id";

    $stmt = $connection->prepare($query);
    $stmt->bindParam(":order", $item->order);
    $stmt->bindParam(":id", $item->id);

    // execute
    try {
        $stmt->execute();
    } catch (PDOException $exception) {
        http_response_code(500);
        echo json_encode(array("message" => $exception));
        return;
    }
}

// success
http_response_code(200);
echo json_encode(array("message" => "Ordering updated."));