<?php
// Allow cross-origin requests (CORS) - You may adjust this as needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Check request method for preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
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

// Decode the JSON data into associative array
$data = json_decode($jsonData, true);

// Check if JSON decoding was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(array("error" => "Invalid JSON data"));
    exit();
}

// Extract data from the decoded JSON array
$email = isset($data['email']) ? $data['email'] : '';
$password = isset($data['password']) ? $data['password'] : '';

// Validate email and password
if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(array("error" => "Please provide email and password"));
    exit();
}

try {
    // Retrieve user from database using prepared statement
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception($conn->error, $conn->errno);
    }
    
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            http_response_code(200);
            echo json_encode(array("message" => "Login successful", "id" => $user['id']));
        } else {
            http_response_code(401);
            echo json_encode(array("error" => "Invalid password"));
        }
    } else {
        http_response_code(404);
        echo json_encode(array("error" => "User not found"));
    }
    
    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(array("error" => "Error logging in: " . $e->getMessage()));
}
?>
