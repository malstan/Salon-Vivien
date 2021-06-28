<?php
/**
 * Stanislav Malik
 * 2021
 * handle login form and authentication
 */

session_start();

// check if user is logged in
if(isset($_SESSION['auth']))
    header("location: index.php");

/* TODO - save elsewhere pls */
$log = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";
$pass = "268db61e674b146a15611e099d27bf4ed56f823a39467edca7a6e25cfa5b0330";

// handle log in
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // hashing
    $username = hash("sha256", $username);
    $password = hash("sha256", $password);

    if ($username == $log && $password == $pass) {
        $_SESSION['auth'] = true;
        $_SESSION['time-stamp'] = time();
        header("location: index.php");
    } else {
        $_SESSION['error-login'] = true;
        header("location: login.php");
    }
}
