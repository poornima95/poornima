<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: application/json,application/x-www-form-urlencoded");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angular";
$conn = new mysqli($servername, $username, $password, $dbname);
$sql= "SELECT * FROM emp_details";
$result=$conn->query($sql);
$rows= mysqli_fetch_array($result);
echo json_encode($rows); 
}
?>