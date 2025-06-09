<?php
$api_key='xxxxxxxxxxxxxxxxxxxxx'; 

$dati = array("key" => $api_key, "image_type" => "photo", "editors_choice" => "true", "per_page" => 100);  
$dat = http_build_query($dati);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://pixabay.com/api/?".$dat);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);

echo $result;

?>