<?php
/**
 * Stanislav Malik
 * 2021
 * upload image
 */

header('Access-Control-Allow-Origin: http://salon-vivien.sk', false);
include('../config/database.php');

// check method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(400);
    echo json_encode(array("message" => "Request is not a POST."));
    return;
}

$destination = "../../../public/figures/uploads/";

// check content
$count = count($_FILES['images']['name']);

if ($count <= 0) {
    http_response_code(400);
    echo json_encode(array("message" => "Image not found."));
    return;
}

// collect image names and upload images
$fileNames = "";
for ($index = 0; $index < $count; $index++) {
    $name = $_FILES['images']['name'][$index];
    $tmp_name = $_FILES['images']['tmp_name'][$index];
    $type = $_FILES['images']['type'][$index];

    // check image type
    if ($type == "image/jpg" || $type == "image/jpeg" || $type == "image/png") {
        $fileNames = $fileNames . $name . ",";
        move_uploaded_file($tmp_name, $destination . $name);
    }
}

// success
http_response_code(200);
echo json_encode(array("imageNames" => $fileNames));

