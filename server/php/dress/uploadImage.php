<?php
/**
 * Stanislav Malik
 * 2021
 * upload image
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include ('../config/database.php');

$database = new Database();
$connection = $database->getConnection();

$destination = "../../public/figures/uploads/";

$count = count($_FILES['images']['name']);

if ($count > 0) {
    $fileNames = "";
    for ($index = 0; $index < $count; $index++) {
        $name = $_FILES['images']['name'][$index];
        $tmp_name = $_FILES['images']['tmp_name'][$index];

        $fileNames = $fileNames . $name . ",";
        move_uploaded_file($tmp_name, $destination.$name);
    }

    http_response_code(200);
    echo json_encode(array("imageNames" => $fileNames));
} else
    http_response_code(400);
