<?php
/**
 * Stanislav Malik
 * 2021
 * create dress
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include ('../config/database.php');

$database = new Database();
$connection = $database->getConnection();

$data = json_decode(file_get_contents('php://input'));

$query = "INSERT INTO dress SET name = :name, size = :size, color = :color, description = :description, price = :price, photo = :photo, category = :category";

$stmt = $connection->prepare($query);

$stmt->bindParam(":name", $data->name);
$stmt->bindParam(":size", $data->size);
$stmt->bindParam(":color", $data->color);
$stmt->bindParam(":description", $data->description);
$stmt->bindParam(":price", $data->price);
$stmt->bindParam(":photo", $data->photo);
$stmt->bindParam(":category", $data->category);

try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

http_response_code(200);