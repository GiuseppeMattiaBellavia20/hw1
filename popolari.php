<?php

session_start();

if(!isset($_SESSION["email"])){
    header("Location: index.php");
    exit;
}


?>

<html>
<head>
<link rel="stylesheet" href="Altre_pagine.css" />
<script src="popolari.js" defer></script>
<title>Pintarest</title>
</head>

<body>  
<nav class="pop">
    <div class="logo"><a href="home.php"><img src="LogoP.PNG" class="logo_img"/></a></div>
    <div class="scri_pop">Popolari</div>
    <a href="home.php"><img src="imm_home.png" class="im_home"></a>
</nav>
           
    <div class="descr">In questa pagina sono raffigurate le immagini che hanno riscontrato maggiore successo.</div>
    <div id="gallery" class="popol"></div>

</body>


</html>