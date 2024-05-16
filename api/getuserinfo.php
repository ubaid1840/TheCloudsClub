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
include 'config.php';

// Check if user is authenticated (optional)
// You can implement additional authentication checks here

// Get user ID from query parameters or session (assuming user is authenticated)
$userId = $_GET['userId']; // Assuming user ID is passed as a query parameter

if (!$userId) {
    http_response_code(400);
    echo json_encode(array("error" => "User ID not provided"));
    exit();
}

// Retrieve user information from the database based on user ID
$sql = "SELECT * FROM users WHERE id = '$userId'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Return user information as JSON response
    echo json_encode(array(
        'info' => $user));
} else {
    http_response_code(404);
    echo json_encode(array("error" => "User not found"));
}

$conn->close();
?>
