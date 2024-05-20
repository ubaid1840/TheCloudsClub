<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check request method
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight OPTIONS request
    http_response_code(200);
    exit();
}

// Start session and include database configuration
session_start();
include 'config.php';

// Read incoming JSON data from the request body
$jsonData = file_get_contents('php://input');

// Check if JSON data was received
if (!$jsonData) {
    http_response_code(400);
    echo json_encode(array("error" => "No JSON data received"));
    exit();
}

// Decode the JSON data into an associative array
$data = json_decode($jsonData, true);

// Check if JSON decoding was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid JSON data"));
    exit();
}

// Extract the user ID from the decoded JSON array
$userId = isset($data['userId']) ? $data['userId'] : '';

// Validate the user ID
if (empty($userId)) {
    http_response_code(400);
    echo json_encode(array("error" => "Please provide a user ID"));
    exit();
}

try {
    // Delete user from the database using a prepared statement
    $sql = "DELETE FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception($conn->error, $conn->errno);
    }

    $stmt->bind_param("i", $userId);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        http_response_code(200);
        echo json_encode(array("message" => "User deleted successfully"));
    } else {
        http_response_code(404);
        echo json_encode(array("error" => "User not found"));
    }

    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array("error" => "Error deleting user: " . $e->getMessage()));
}
?>
