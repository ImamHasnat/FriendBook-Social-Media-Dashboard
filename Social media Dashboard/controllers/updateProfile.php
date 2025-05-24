<?php
session_start();
require_once('../models/userModel.php');

function isValidName($name) {
    return preg_match('/^[A-Za-z0-9_\- ]{3,30}$/', $name); // 3-30 chars, letters, numbers, _ - and space
}
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_SESSION['username'])) {
        echo "<script>alert('Not logged in.'); window.location.href='../views/FormValidation.html';</script>";
        exit();
    }
    $username = $_SESSION['username'];
    $newName = $_POST['editName'] ?? '';
    $newEmail = $_POST['editEmail'] ?? '';
    if (empty($newName) || empty($newEmail)) {
        echo "<script>alert('All fields are required!'); window.location.href='../views/ProfileManagement.php';</script>";
        exit();
    }
    if (!isValidName($newName)) {
        echo "<script>alert('Invalid name. Use 3-30 letters, numbers, spaces, - or _.'); window.location.href='../views/ProfileManagement.php';</script>";
        exit();
    }
    if (!isValidEmail($newEmail)) {
        echo "<script>alert('Invalid email address.'); window.location.href='../views/ProfileManagement.php';</script>";
        exit();
    }
    if (updateUserProfile($username, $newName, $newEmail)) {
        echo "<script>alert('Profile updated successfully!'); window.location.href='../views/ProfileManagement.php';</script>";
    } else {
        echo "<script>alert('Failed to update profile.'); window.location.href='../views/ProfileManagement.php';</script>";
    }
    exit();
} else {
    header('Location: ../views/ProfileManagement.php');
    exit();
}
