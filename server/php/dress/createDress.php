<?php
/**
 * Stanislav Malik
 * 2021
 * insert dress to database
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include('../config/database.php');

// check method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(array("message" => "Request is not a POST."));
    return;
}

// get and check body
$data = json_decode(file_get_contents('php://input'));

if (!isset($data->name) || !isset($data->color) || !isset($data->price) ||
    !isset($data->photo) || !isset($data->category)) {
    http_response_code(400);
    echo json_encode(array("message" => "Content must have specific strusture."));
    return;
}

// create, prepare query
$database = new Database();
$connection = $database->getConnection();

$query = "INSERT INTO dress (name, size, color, description, price, photo, category) 
          VALUES (:name, :size, :color, :description, :price, :photo, :category)";

$stmt = $connection->prepare($query);

$stmt->bindParam(":name", $data->name);
$stmt->bindParam(":size", $data->size);
$stmt->bindParam(":color", $data->color);
$stmt->bindParam(":description", $data->description);
$stmt->bindParam(":price", $data->price);
$stmt->bindParam(":photo", $data->photo);
$stmt->bindParam(":category", $data->category);

// execute
try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

// success
http_response_code(200);
echo json_encode(array("message" => "Dress created."));