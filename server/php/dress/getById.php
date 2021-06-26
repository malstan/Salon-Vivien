<?php
/**
 * Stanislav Malik
 * 2021
 * get dress from database by id
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

$query = "SELECT * FROM dress WHERE id_dress = :id";

$stmt = $connection->prepare($query);
$stmt->bindParam(":id", $id);

try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

if ($stmt->rowCount() != 1) {
    http_response_code(404);
    echo json_encode(array("message" => "not found"));
} else {
    $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
    $data['dress'] = $dataRow;

    /* send response */
    http_response_code(200);
    echo json_encode($data);
}

