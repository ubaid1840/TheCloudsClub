<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check request method
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Handle preflight OPTIONS request
    http_response_code(200);
    exit();
}

session_start();
include 'config.php';

// Retrieve all users from the database
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $users = array();
    
    // Fetch all rows as associative arrays
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }

    // Return users as JSON response
    echo json_encode($users);
} else {
    http_response_code(404);
    echo json_encode(array("error" => "No users found"));
}

$conn->close();
?>
