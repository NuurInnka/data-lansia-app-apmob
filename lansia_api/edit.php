<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-with, x-xsrf-token");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=utf-8");
include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $_GET['id_lansia'];
$nama = $data['nama'];
$tmpt_lahir = $data['tempat_lahir'];
$tgl_lahir = $data['tanggal_lahir'];
$alamat = $data['alamat'];
$umur = $data['umur'];
$status = $data['status_'];

$query = mysqli_query($con, "UPDATE data_lansia SET nama='$nama', tempat_lahir='$tmpt_lahir', tanggal_lahir='$tgl_lahir', alamat='$alamat', umur='$umur', status_='$status' WHERE id_lansia='$id'");

if ($query) {
    http_response_code(201);
    $message['status'] = "Sukses";
} else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
