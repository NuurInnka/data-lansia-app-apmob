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
$nama = $data['nama'];
$tmpt_lahir = $data['tempat_lahir'];
$tgl_lahir = $data['tanggal_lahir'];
$alamat = $data['alamat'];
$umur = $data['umur'];
$status = $data['status_'];

$query = mysqli_query($con, "INSERT INTO data_lansia VALUES (NULL, '$nama', '$tmpt_lahir', '$tgl_lahir', '$alamat', '$umur', '$status')");

if ($query){
    http_response_code(201);
    $message['status'] = "Sukses";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);
?>
