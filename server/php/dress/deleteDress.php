<?php
/**
 * Stanislav Malik
 * 2021
 * delete dress by id from database
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

$query = "DELETE FROM dress WHERE id_dress = :id";

$stmt = $connection->prepare($query);
$stmt->bindParam(":id", $id);

try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

http_response_code(200);