<?php
// Allow cross-origin requests (CORS)
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

// Check if a file was uploaded and user ID and email were provided
if (!isset($_FILES['file']) || !isset($_POST['user_id']) || !isset($_POST['user_email'])) {
    http_response_code(400);
    echo json_encode(array("error" => "File, user ID, or user email not provided"));
    exit();
}

$user_id = $_POST['user_id'];
$user_email = $_POST['user_email'];
$file = $_FILES['file'];

$target_dir = "uploads/";
$imageFileType = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));

// Rename the file to the user's email
$target_file = $target_dir . $user_email . "." . $imageFileType;

// Check if file already exists and delete it
if (file_exists($target_file)) {
    unlink($target_file);
}

// Attempt to move the uploaded file to the target directory
if (!move_uploaded_file($file["tmp_name"], $target_file)) {
    http_response_code(500);
    echo json_encode(array("error" => "Failed to upload file"));
    exit();
}

// Update the user's profile picture in the database
$sql = "UPDATE users SET profile_picture=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $target_file, $user_id);

if ($stmt->execute()) {
    http_response_code(200);
    echo json_encode(array("message" => "Profile picture updated successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("error" => "Failed to update profile picture: " . $stmt->error));
}

$stmt->close();
$conn->close();
?>
