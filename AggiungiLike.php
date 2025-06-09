<?php

session_start();

$immId = $_GET["imageId"];
$userId = $_SESSION["username"];

if(!isset($_GET["action"])){
    $conn   = mysqli_connect("localhost","root","","pintarest_uni");
    $query = "INSERT INTO user_likes (user_id, image_id, like_im) VALUES('$userId', '$immId', 1)";

    $res = mysqli_query($conn, $query);

} else {

    $conn   = mysqli_connect("localhost","root","","pintarest_uni");
    $query = "DELETE FROM user_likes WHERE user_id  = '$userId' AND image_id = '$immId'";

    $res = mysqli_query($conn, $query);
}
?>
