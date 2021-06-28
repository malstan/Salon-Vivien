<?php
/**
 * Stanislav Malik
 * 2021
 * get dresses from database by category, limit and offset
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include('../config/database.php');

// check method
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(400);
    echo json_encode(array("message" => "Request is not a GET."));
    return;
}

// get attributes
if (!isset($_GET['category'])) {
    http_response_code(400);
    echo json_encode(array("message" => "Id of category is missing."));
    return;
}
$category = intval($_GET['category']);

// limit and offset are not required
if (isset($_GET['limit']) && isset($_GET['offset'])) {
    $limit = intval($_GET['limit']);
    $offset = intval($_GET['offset']);

    $query = "SELECT * FROM dress WHERE category = '" . $category . "' ORDER BY ordering LIMIT " . $limit . " OFFSET " . $offset;
} else
    $query = "SELECT * FROM dress WHERE category = '" . $category . "' ORDER BY ordering";

// create, prepare query
$database = new Database();
$connection = $database->getConnection();

$stmt = $connection->prepare($query);

// execute
try {
    $stmt->execute();
} catch (PDOException $exception) {
    http_response_code(500);
    echo json_encode(array("message" => $exception));
    return;
}

// row check
if ($stmt->rowCount() == 0) {
    http_response_code(404);
    echo json_encode(array("message" => "Dresses of category " . $category . " not found"));
    return;
} else {
    $dress_arr = array();
    $dress_arr["dresses"] = array();

    // add dresses to array
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $dress_item = array(
            "id_dress" => $id_dress,
            "name" => $name,
            "size" => $size,
            "color" => $color,
            "description" => $description,
            "price" => $price,
            "photo" => $photo,
            "category" => $category,
            "ordering" => $ordering,
        );
        array_push($dress_arr["dresses"], $dress_item);
    }

    // add total count to array
    $queryCount = "SELECT count(*) as total FROM dress WHERE category = '" . $category . "'";
    $stmtCount = $connection->prepare($queryCount);

    // execute
    try {
        $stmtCount->execute();
        $dress_arr['total'] = $stmtCount->fetchColumn();
    } catch (PDOException $exception) {
        http_response_code(500);
        echo json_encode(array("message" => $exception));
        return;
    }

    // success
    http_response_code(200);
    echo json_encode($dress_arr);
}