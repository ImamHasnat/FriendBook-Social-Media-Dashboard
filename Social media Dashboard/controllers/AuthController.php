<?php
require_once('../models/userModel.php');

class AuthController {
    public function login() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = $_POST['username'] ?? '';
            $password = $_POST['password'] ?? '';
            $user = ['username' => $username, 'password' => $password];
            if (login($user)) {
                header('Location: ../views/ProfileManagement.html');
                exit();
            } else {
                echo "<script>alert('Invalid username or password!'); window.location.href='../views/FormValidation.html';</script>";
                exit();
            }
        } else {
            header('Location: ../views/FormValidation.html');
            exit();
        }
    }

    public function register() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = $_POST['username'] ?? '';
            $email = $_POST['email'] ?? '';
            $password = $_POST['password'] ?? '';
            $user = [
                'username' => $username,
                'email' => $email,
                'password' => $password
            ];
            if (!empty($username) && !empty($email) && !empty($password)) {
                if (addUser($user)) {
                    echo "<script>alert('Registration successful! Please login.'); window.location.href='../views/FormValidation.html';</script>";
                    exit();
                } else {
                    echo "<script>alert('Registration failed! Try again.'); window.location.href='../views/Register.html';</script>";
                    exit();
                }
            } else {
                echo "<script>alert('All fields are required!'); window.location.href='../views/Register.html';</script>";
                exit();
            }
        } else {
            header('Location: ../views/Register.html');
            exit();
        }
    }
}

// Handle direct access for registration
if (isset($_GET['action']) && $_GET['action'] === 'register') {
    $controller = new AuthController();
    $controller->register();
    exit();
}
// Handle direct access for login (optional)
if (isset($_GET['action']) && $_GET['action'] === 'login') {
    $controller = new AuthController();
    $controller->login();
    exit();
}
