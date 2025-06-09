
<?php
session_start();
$error = FALSE;
if(isset($_SESSION["email"])){
    header("Location: home.php");
    exit;
}

if(isset($_POST["email"]) && isset($_POST["password"])){
    

    $conn = mysqli_connect("localhost", "root", "", "pintarest_uni");

    $email=mysqli_real_escape_string($conn, $_POST["email"]);
    $password=mysqli_real_escape_string($conn, $_POST["password"]);

    $query = "SELECT * FROM users WHERE email = '".$email."' AND password_hash = '".$password."'";
    $res = mysqli_query($conn, $query);

    if(mysqli_num_rows($res) > 0){

        $_SESSION["email"]=$_POST["email"];
        header("Location: home.php");
        exit;
    } else {
        $error = true;
    }

}

?>



<html>
<head>
<link rel="stylesheet" href="index.css" />
</head>

<body>
<div id="login">
        <div class="menu-log">
            <div class="logo"><img src="LogoP.png" /></div>
            <div class="scri1-art4">Ti diamo il benvenuto su pintarest</div>
            <div class="scri2-art4">Scopri nuove idee da provare</div>
            <div class="menu-el">
                <?php

                    if($error == TRUE){
                        echo "Errore nelle credenzioli, riprovare.";
                    }

                ?>

                <form method="post" name="form_accedi">
                Email
                <div class="sezione"><input type="text" class="email-testo" name="email"/> </div>
                Password
                <div class="sezione"><input type="password" class="pass-testo" name="password"/></div>
                <input type="submit" value="login" name="login" class="cont">
            </form>
                    <strong>Oppure</strong>
                <a href="">
                    <div class="google">
                        <div class="cont"><img src="google-logo.png" />Continua con google</div>
                    </div>
                </a>
                <a href="">
                    <div class="facebook">
                        <div class="contF"><img src="facebook logo.png" />Continua con facebook</div>
                    </div>
                </a>
                
            </div>
            <div class="info-reg">
                Continuando, accetti <a class="info-link" href="" > i Termini di servizio </a> di 
                Pinterest e dichiari di aver letto le nostre <a class="info-link" href="" >Norme sulla privacy</a>. 
                <a class="info-link" href="" >Avviso sulla raccolta.</a> 
            </div>

            <div class="tasto-inscr">Non hai ancora un account? <a href="index.php"><strong>Inscriviti</strong></a></div>
        </div>
    </div>
    </body>
    
    </html>