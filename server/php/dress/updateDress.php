<?php
/**
 * Stanislav Malik
 * 2021
 * update dress by id in database
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include ('../config/database.php');

$database = new Database();
$connection = $database->getConnection();

/* get query attributes */
if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(array("message" => "Id of dress is missing."));
    return;
}
$id = intval($_GET['id']);
$data = json_decode(file_get_contents('php://input'));

$query = "UPDATE dress SET name = :name, size = :size, color = :color, description = :description, price = :price, photo = :photo, category = :category WHERE id_dress = :id";

$stmt = $connection->prepare($query);

$stmt->bindParam(":name", $data->name);
$stmt->bindParam(":size", $data->size);
$stmt->bindParam(":color", $data->color);
$stmt->bindParam(":description", $data->description);
$stmt->bindParam(":price", $data->price);
$stmt->bindParam(":photo", $data->photo);
$stmt->bindParam(":category", $data->category);
$stmt->bindParam(":id", $id);

try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

http_response_code(200);