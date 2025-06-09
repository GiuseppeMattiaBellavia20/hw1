
<?php

session_start();

if($_GET["azione"]=='Preferiti'){
if(isset($_SESSION["username"])){
$userId = $_SESSION["username"];

    $conn   = mysqli_connect("localhost","root","","pintarest_uni");
    $query = "SELECT id_image, url_image FROM immagini_preferite WHERE user_id = '$userId'";

    $res = mysqli_query($conn, $query);

    $pref = [];

    if(mysqli_num_rows($res) > 0){
    while ($row = mysqli_fetch_assoc($res)) {
        $pref[] = [
          'id_image' => $row['id_image'],
          'url_image' => $row['url_image']
            ];
        }
        echo json_encode($pref);
    } else {
    echo json_encode(["error" => "no"]);
    exit;
    }
}  else {
    echo json_encode(["error" => "no"]);
    exit;
    }

} elseif($_GET["azione"]=='like'){

if(isset($_SESSION["username"])){
$userId = $_SESSION["username"];

    $conn   = mysqli_connect("localhost","root","","pintarest_uni");
    $query = "SELECT image_id FROM user_likes WHERE user_id = '$userId'";

    $res = mysqli_query($conn, $query);

    $liked = [];
    while ($row = mysqli_fetch_assoc($res)) {
        $liked[] = $row['image_id'];
    }

    echo json_encode($liked);
} else {
    echo json_encode(["error" => "no"]);
    exit;
}

} elseif($_GET["azione"]=='popolari'){

$conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die("Errore connessione");
$query = "SELECT image_id, COUNT(*) as like_count
          FROM user_likes
          GROUP BY image_id
          HAVING like_count >= 3";

$res = mysqli_query($conn, $query);

$like_ids = [];
while($row = mysqli_fetch_assoc($res)){
    $like_ids[] = $row["image_id"];
}

echo json_encode($like_ids);

} elseif($_GET["azione"]=='email'){

$conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die("Errore connessione");
$query = "SELECT email FROM users";

$res = mysqli_query($conn, $query);

$email = [];
while($row = mysqli_fetch_assoc($res)){
    $email[] = $row["email"];
}

echo json_encode($email);

}
?>