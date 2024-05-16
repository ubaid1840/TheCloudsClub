<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check request method
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight OPTIONS request
    http_response_code(200);
    exit();
}

session_start();
if (isset($_SESSION['user_id'])) {
    echo json_encode(array("loggedIn" => true));
} else {
    echo json_encode(array("loggedIn" => false));
}
?>
