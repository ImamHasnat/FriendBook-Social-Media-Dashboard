<?php
    //include('db.php');
    //include_once('db.php');
    //require('db.php');
    require_once('db.php');

function login($user){
    $con = getConnection();
    $sql = "select * from users where username='{$user['username']}' and password='{$user['password']}'";
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);

    if($count == 1){
        return true;
    }else{
        return false;
    }

}

function getUserById($id){
    $con = getConnection();
    $sql = "select * from users where id='{$id}'";
    $result = mysqli_query($con, $sql);
    if($row = mysqli_fetch_assoc($result)){
        return $row;
    }
    return false;
}

function getAllUser(){
    $con = getConnection();
    $sql = "select * from users";
    $result = mysqli_query($con, $sql);
    $users = [];
    while($row = mysqli_fetch_assoc($result)){
        $users[] = $row;
    }
    return $users;
}

function deleteUser($id){
    $con = getConnection();
    $sql = "delete from users where id='{$id}'";
    return mysqli_query($con, $sql);
}

function addUser($user){
    $con = getConnection();
    $sql = "insert into users (username, password, email) values ('{$user['username']}', '{$user['password']}', '{$user['email']}')";
    return mysqli_query($con, $sql);
}

function getUserByUsername($username){
    $con = getConnection();
    $sql = "SELECT * FROM users WHERE username='" . mysqli_real_escape_string($con, $username) . "' LIMIT 1";
    $result = mysqli_query($con, $sql);
    if($row = mysqli_fetch_assoc($result)){
        return $row;
    }
    // Try email if not found by username
    $sql = "SELECT * FROM users WHERE email='" . mysqli_real_escape_string($con, $username) . "' LIMIT 1";
    $result = mysqli_query($con, $sql);
    if($row = mysqli_fetch_assoc($result)){
        return $row;
    }
    return false;
}

//Upadate user password
function updateUserPassword($username, $newPassword){
    $con = getConnection();
    $sql = "UPDATE users SET password='" . mysqli_real_escape_string($con, $newPassword) . "' WHERE username='" . mysqli_real_escape_string($con, $username) . "'";
    return mysqli_query($con, $sql);
}

function updateUserProfile($username, $newName, $newEmail) {
    $con = getConnection();
    $sql = "UPDATE users SET username='" . mysqli_real_escape_string($con, $newName) . "', email='" . mysqli_real_escape_string($con, $newEmail) . "' WHERE username='" . mysqli_real_escape_string($con, $username) . "'";
    $result = mysqli_query($con, $sql);
    if ($result) {
        // Update session username if changed
        if ($username !== $newName) {
            $_SESSION['username'] = $newName;
        }
        return true;
    }
    return false;
}

?>