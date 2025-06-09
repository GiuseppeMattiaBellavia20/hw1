<?php
$api_key='xxxxxxxxxxxxxxxxx'; 

if(isset($_GET["q"])){
    $q = $_GET["q"];
}


$dati = array("key" => $api_key, "q" => $q, "image_type" => "photo", "per_page" => 40);
$dat = http_build_query($dati);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://pixabay.com/api/?".$dat);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);

echo $result;

?>