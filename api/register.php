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

// Include database configuration
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
$name = isset($data['name']) ? $data['name'] : '';
$age = isset($data['age']) ? $data['age'] : '';
$alreadyMember = isset($data['alreadyMember']) ? $data['alreadyMember'] : '';
$city = isset($data['city']) ? $data['city'] : '';
$requiredCannabis = isset($data['requiredCannabis']) ? $data['requiredCannabis'] : '';
$address = isset($data['address']) ? $data['address'] : ''; // Corrected typo from 'adress' to 'address'
$password = isset($data['password']) ? $data['password'] : '';
$profilePicture = ''; // Default empty string for profile picture

// Validate required fields
if (empty($email) || empty($name) || empty($password) || empty($age) || empty($alreadyMember) || empty($city) || empty($requiredCannabis) || empty($address)) {
    http_response_code(400);
    echo json_encode(array("error" => "Please provide all required fields"));
    exit();
}

// Hash the password
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

try {
    // Insert user data into database using prepared statement
    $sql = "INSERT INTO users (email, name, age, alreadyMember, city, requiredCannabis, address, password, profile_picture) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        throw new Exception($conn->error, $conn->errno);
    }
    
    $stmt->bind_param("sssssssss", $email, $name, $age, $alreadyMember, $city, $requiredCannabis, $address, $passwordHash, $profilePicture);

    if (!$stmt->execute()) {
        throw new Exception($stmt->error, $stmt->errno);
    }

    http_response_code(200);
    echo json_encode(array("message" => "User registered successfully"));
    
    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    // Handle specific error codes
    if ($e->getCode() === 1062) {
        http_response_code(400);
        echo json_encode(array("error" => "Email address already exists"));
    } else {
        http_response_code(500);
        echo json_encode(array("error" => "Error registering user: " . $e->getMessage()));
    }
}
?>
