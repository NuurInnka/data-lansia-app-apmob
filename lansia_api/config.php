<?php
$namaserver = "localhost";
$userdb = "root";
$password = "";
$db = "db_lansia";
$con = mysqli_connect($namaserver, $userdb, $password, $db);

if (!$con) {
    die("Koneksi ke database gagal" . mysqli_connect_error());
}
?>