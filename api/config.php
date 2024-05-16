<?php
// Database configuration
$servername = "localhost"; // Change this to your database host if it's not localhost
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$dbname = "cloudclubcc_db"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // echo "Connection successful"; // Output a message indicating successful connection
}
?>
