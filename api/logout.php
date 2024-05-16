<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check request method
session_start();

if (isset($_SESSION['user_id'])) {
    session_unset();
    session_destroy();
    echo json_encode(array("message" => "Logout successful"));
} else {
    echo json_encode(array("error" => "User not logged in"));
}
?>
