<?php
$rootDirectory = __DIR__ . '/../'; // Adjust if your folder structure is different
$excludeDirectory = 'api'; // Name of the directory to exclude

function deleteFiles($directory, $excludeDirectory) {
    $files = array_diff(scandir($directory), array('.', '..'));
    foreach ($files as $file) {
        $filePath = $directory . '/' . $file;
        if (is_dir($filePath)) {
            if ($file !== $excludeDirectory) {
                deleteFiles($filePath, $excludeDirectory); // Recursively delete files in subdirectories
                if (!rmdir($filePath)) {
                    echo "Failed to remove directory: $filePath\n";
                }
            }
        } else {
            if (!unlink($filePath)) {
                echo "Failed to delete file: $filePath\n";
            }
        }
    }
}

if (is_dir($rootDirectory)) {
    deleteFiles($rootDirectory, $excludeDirectory);
    echo 'All files except the ' . $excludeDirectory . ' directory have been processed.';
} else {
    echo 'Invalid directory path';
}
?>
