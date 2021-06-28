<?php
/**
 * Stanislav Malik
 * 2021
 * get dress from database by id
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include('../config/database.php');

// check method
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(400);
    echo json_encode(array("message" => "Request is not a GET."));
    return;
}

// get attribute
if (!isset($_GET['id'])) {
    http_response_code(400);
    echo json_encode(array("message" => "Id of dress is missing."));
    return;
}
$id = intval($_GET['id']);

// create, prepare query
$database = new Database();
$connection = $database->getConnection();

$query = "SELECT * FROM dress WHERE id_dress = :id";

$stmt = $connection->prepare($query);
$stmt->bindParam(":id", $id);

// execute
try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

// row check
if ($stmt->rowCount() != 1) {
    http_response_code(404);
    echo json_encode(array("message" => "Dress with id " . $id . " not found."));
} else {
    $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
    $data['dress'] = $dataRow;

    // success
    http_response_code(200);
    echo json_encode($data);
}