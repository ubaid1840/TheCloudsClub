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

$jsonData = file_get_contents('php://input');

// Check if JSON data was received
if (!$jsonData) {
    http_response_code(400);
    echo json_encode(array("error" => "No JSON data received"));
    exit();
}

// Decode the JSON data into associative array
$data = json_decode($jsonData, true);

// Check if JSON decoding was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid JSON data"));
    exit();
}


$email = isset($data['email']) ? $data['email'] : '';
$password = isset($data['password']) ? $data['password'] : '';

// Validate email and password
if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(array("error" => "Please provide email and password"));
    exit();
}

// Retrieve user from database
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        echo json_encode(array("message" => "Login successful",  "id" => $user['id']));
    } else {
        echo json_encode(array("error" => "Invalid password"));
    }
} else {
    echo json_encode(array("error" => "User not found"));
}

$conn->close();
?>
