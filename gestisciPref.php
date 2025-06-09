<?php

session_start();

$immId = $_GET["imageId"];
$userId = $_SESSION["username"];

if(isset($_GET["imgUrl"])){

    $url=$_GET["imgUrl"];

    $conn   = mysqli_connect("localhost","root","","pintarest_uni");
    $query = "INSERT INTO immagini_preferite (user_id, id_image, url_image) VALUES('$userId', '$immId', '$url')";

    $res = mysqli_query($conn, $query);

} else {

    $conn   = mysqli_connect("localhost","root","","pintarest_uni");
    $query = "DELETE FROM immagini_preferite WHERE user_id  = '$userId' AND id_image = '$immId'";

    $res = mysqli_query($conn, $query);
}
?>


