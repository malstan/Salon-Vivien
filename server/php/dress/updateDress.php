<?php
/**
 * Stanislav Malik
 * 2021
 * update dress by id in database
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include('../config/database.php');

// check method
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405);
    echo json_encode(array("message" => "Request is not a PUT."));
    return;
}

// get attribute
if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(array("message" => "Id of dress is missing."));
    return;
}
$id = intval($_GET['id']);

// get and check body
$data = json_decode(file_get_contents('php://input'));

if (!isset($data->name) || !isset($data->size) || !isset($data->color) ||
    !isset($data->price) || !isset($data->photo) || !isset($data->category)) {
    http_response_code(400);
    echo json_encode(array("message" => "Content must have specific structure."));
    return;
}

// create, prepare query
$database = new Database();
$connection = $database->getConnection();

$query = "UPDATE dress SET name = :name, size = :size, color = :color, description = :description, price = :price, photo = :photo, category = :category 
        WHERE id_dress = :id";

$stmt = $connection->prepare($query);

$stmt->bindParam(":name", $data->name);
$stmt->bindParam(":size", $data->size);
$stmt->bindParam(":color", $data->color);
$stmt->bindParam(":description", $data->description);
$stmt->bindParam(":price", $data->price);
$stmt->bindParam(":photo", $data->photo);
$stmt->bindParam(":category", $data->category);
$stmt->bindParam(":id", $id);

// execute
try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

// check affected rows
if (!$stmt->rowCount()) {
    http_response_code(404);
    echo json_encode(array("message" => "Dress with id " . $id . " not found."));
    return;
}

// success
http_response_code(200);
echo json_encode(array("message" => "Dress with id " . $id . " updated."));