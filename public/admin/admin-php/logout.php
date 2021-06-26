<?php
/**
 * Stanislav Malik
 * 2021
 * handle log out
 */

session_start();
session_destroy();

header("location: ../login.php");