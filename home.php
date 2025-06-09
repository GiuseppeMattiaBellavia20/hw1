<?php
session_start();

$error = false;

if(!isset($_SESSION["email"])){
    header("Location: index.php");
    exit;
}


$conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
$query = "SELECT username FROM users WHERE email ='".$_SESSION["email"]."'";
        
$res = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($res);
if (mysqli_num_rows($res)>=1 && $row['username']!= '') {
    $_SESSION['username'] = $row['username'];   
    } else {
        $error=true;
    }


?>



<html>
<head>
<link rel="stylesheet" href="home.css" />
<script src="home.js" defer></script>
<title>Pintarest</title>
</head>

<body>
    <div class="barre_di_funzione">
        <div class="barra_laterale">
            <div class="logo"><a href="home.php"><img src="LogoP.PNG" class="logo_img"/></a></div>
            <div class="prefer"><a href="preferiti.php"><img src="preferiti.png" class="preferiti"></a></div>
            <div class="popol"><a href="popolari.php"><img src="popolari.png" class="popolari"></a></div>
        </div>
        <nav>
            <div class="form_ricerca">
                <form action="" id="form1">
                <input type="text" name="cerca" value="  Cerca ciò che vuoi!!" class="ricerca">
                <input type="submit" value="Cerca" class="tasto_ric">
                </form>
            </div>

            
            
                <div id="menu-3linee">
                    <a href="">
                        <div class="linea"></div>
                        <div class="linea"></div>
                        <div class="linea"></div>
                    </a>
                </div>
               <div id="x-menu-3linee" class="hidden">
                    <img src="imX.png" />
                </div>

    
            
    
        </nav>
           
            <div id="men-3linee-open" class="hidden">
                <div class="menu"><a href="profilo.php">Profilo</a></div>
                <div class="menu"><a href="preferiti.php">Preferiti</a></div>
                <div class="menu"><a href="popolari.php">Popolari</a></div>
                <a href="chiudi_sessione.php" class="Esci">Esci</a>
            </div>
            <?php

            if($error == true){
                echo "<span class=\"info_us\">Per poter salvare i Like è necessario prima inserire un username, per farlo andate su Menu>profilo>Aggiungi un username.</span>";
            }

            ?>
            <div id="gallery">
        

            </div>
    </div>

    <section id="Album_foto" class="hidden"></section>
    <div id="X_alb" class="hidden"><img src="imX.png" /></div>

    <section class="area1">
        
    </section>
    

</body>


</html>