<?php

session_start();

if(!isset($_SESSION["email"])){
    header("Location: index.php");
    exit;
}




?>


<html>
<head>
<title>Preferiti</title>
<link rel="stylesheet" href="Altre_pagine.css">
<script src="preferiti.js" defer></script>
</head>

<body>
    
<nav class="pref">
    <div class="back"><a href="home.php"><img src="imm_home.png"></a></div>
    <h1>Preferiti</h1>
</nav>


<div id="gallery"></div>
</body>


</html>