<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-with, x-xsrf-token");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=utf-8");
include "config.php";

$data = array();
$id = $_GET['id_lansia'];
$query = mysqli_query($con, "SELECT * FROM data_lansia WHERE id_lansia='$id' LIMIT 1");

while ($row = mysqli_fetch_object($query)){
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($con);
?>
