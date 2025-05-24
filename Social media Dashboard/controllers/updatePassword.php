<?php
session_start();
require_once('../models/userModel.php');

function isValidPassword($password) {
    // Example: at least 6 chars, at least one letter and one number
    return preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/', $password);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_SESSION['username'])) {
        echo "<script>alert('Not logged in.'); window.location.href='../views/FormValidation.html';</script>";
        exit();
    }
    $username = $_SESSION['username'];
    $newPassword = $_POST['newPassword'] ?? '';
    $confirmPassword = $_POST['confirmPassword'] ?? '';
    if (empty($newPassword) || empty($confirmPassword)) {
        echo "<script>alert('Both password fields are required.'); window.location.href='../views/ProfileManagement.php';</script>";
        exit();
    }
    if ($newPassword !== $confirmPassword) {
        echo "<script>alert('Passwords do not match.'); window.location.href='../views/ProfileManagement.php';</script>";
        exit();
    }
    if (!isValidPassword($newPassword)) {
        echo "<script>alert('Password must be at least 6 characters and contain at least one letter and one number.'); window.location.href='../views/ProfileManagement.php';</script>";
        exit();
    }
    if (updateUserPassword($username, $newPassword)) {
        echo "<script>alert('Password updated successfully.'); window.location.href='../views/ProfileManagement.php';</script>";
    } else {
        echo "<script>alert('Failed to update password.'); window.location.href='../views/ProfileManagement.php';</script>";
    }
    exit();
} else {
    header('Location: ../views/ProfileManagement.php');
    exit();
}
