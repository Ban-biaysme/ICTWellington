<?php

include "database.php";
$request = file_get_contents('php://input');
$jsonData = json_decode($request,TRUE);

$name = $jsonData["userName"];
$password = $jsonData["password"];
$email = $jsonData["email"];

//Insert data //Prepared statement //Bind values

$stmt = $conn->prepare("INSERT INTO register_info (username, password, email) VALUES (?, ?, ?)");

// prepare and bind
$stmt->bind_param("sss", $name, $password, $email);
$stmt->execute();

$conn->close();
?>