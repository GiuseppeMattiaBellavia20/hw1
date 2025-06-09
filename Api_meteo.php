<?php
$API_KEY= "xxxxxxxxxxxxxxxxxxxxx";

if(isset($_GET["lat"]) && isset($_GET["lon"])){
    $lat = $_GET["lat"];
    $lon = $_GET["lon"];
}

$dati = array("lat" => $lat, "lon" => $lon, "lang" => "it", "appid" => $API_KEY, "units" => "metric");
$dat = http_build_query($dati);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://api.openweathermap.org/data/2.5/weather?".$dat);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);

echo $result;



?>