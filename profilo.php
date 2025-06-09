<?php

session_start();

$errPass = false;

if(!isset($_SESSION["email"])){
    header("Location: index.php");
    exit;
}

$conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
$query = "SELECT username, password_hash FROM users WHERE email ='".$_SESSION["email"]."'";
        
$res = mysqli_query($conn, $query);
$row = mysqli_fetch_assoc($res);
if (mysqli_num_rows($res)>=1 && $row['username']!= '') {
    $_SESSION['username'] = $row['username']; 
    }
    $_SESSION['password_hash']=$row['password_hash'];

    
if(isset($_POST["username"])){
    if($_POST["username"] == ''){
        $error = TRUE;
    }
    
    $conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
    $username=mysqli_real_escape_string($conn, $_POST["username"]);
    $query = "UPDATE users SET username= '$username' WHERE email ='".$_SESSION["email"]."'";

    $res = mysqli_query($conn, $query);

    if ($res) {
    $_SESSION['username'] = $username;
    }


}


if(isset($_POST["Oldpassword"]) && isset($_POST["Newpassword"])){

    if($_POST["Newpassword"]!=''){

        $conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
        $query = "SELECT password_hash FROM users WHERE email ='".$_SESSION["email"]."' AND username = '".$_SESSION["username"]."'";

        $res = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($res);

        if(mysqli_num_rows($res)>=1){

            if($row["password_hash"] == $_POST["Oldpassword"]){

                $conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
                $NewPass=mysqli_real_escape_string($conn, $_POST["Newpassword"]);
                $query = "UPDATE users SET password_hash= '$NewPass' WHERE email ='".$_SESSION["email"]."'";

                $res = mysqli_query($conn, $query);

                $_SESSION["password_hash"] = $NewPass;

            } else {
                $errPass = true;
            }

        }



    }


}



if(!isset($_POST["Nome"]) && !isset($_POST["Cognome"])){

        $conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
        $query = "SELECT nome, cognome FROM dati_user WHERE email ='".$_SESSION["email"]."'";

        $res = mysqli_query($conn, $query);
        $row = mysqli_fetch_assoc($res);

        if(mysqli_num_rows($res)>=1){

        $_SESSION["Nome"] = $row["nome"];
        $_SESSION["Cognome"] = $row["cognome"];

        }
    } elseif(isset($_POST["Nome"]) && isset($_POST["Cognome"])){

    if($_POST["Nome"]!='' && $_POST["Cognome"]!=''){

                $conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
                $Nome=mysqli_real_escape_string($conn, $_POST["Nome"]);
                $Cogn=mysqli_real_escape_string($conn, $_POST["Cognome"]);
                $query = "INSERT INTO dati_user(nome, cognome, email) VALUES('$Nome', '$Cogn','".$_SESSION["email"]."')";

                $res = mysqli_query($conn, $query);

                $_SESSION["Nome"] = $Nome;
                $_SESSION["Cognome"] = $Cogn;

            } else {
                $errAnag = true;
            }

        }


?>


<html>
<head>
<title>Profilo</title>
<link rel="stylesheet" href="Altre_pagine.css">
</head>

<body>
    
<nav>
    <div id="navBar">

        <a href="home.php"><img src="imm_home.png" class="im_home"></a>
            <div class="scritta_us">
                <?php
                    if(isset($_SESSION["username"]) && $_SESSION['username'] != ''){
                        echo "Profilo di ".$_SESSION["username"];
                    } else {
                        echo "Profilo di (Inserire il nome utente)";
                    }
                ?>
            </div>
    </div>
</nav>

<section>
<h1>Dati personali:</h1>
<div id="dati">
<div id="email" class="dat">Email: <?php echo $_SESSION["email"];  ?> </div>
<div id="username">
    <?php

    if(isset($_SESSION["username"]) && $_SESSION['username'] != '')
    {
        echo "<div class=\"dat\">Username: ".$_SESSION["username"]."</div>";
    } else {
        echo "<div class=\"datvar\">
        <span class=\"scri\">Aggiungi un username: </span><form method=\"post\" name=\"form_user\" class=\"form_u\">
        <input type=\"text\" name=\"username\" class=\"user\"/>
        <input type=\"submit\" value=\"Salva\" class=\"invia_user\"/>
        </form>
        </div>
        ";
    }

    ?>

</div>

<div class=password>

    <?php

    if(isset($_POST["Cambio_pass"] )|| $errPass==true){
            if($errPass==true){echo "Password vecchia errata.";}
            echo "<div class=\"datvar\">
            <span class=\"scri\">Modifica la password: </span><br>
            <form method=\"post\" name=\"form_mod_pass\" class=\"form_u\">
            <span class=\"scri\">Password attuale: </span><input type=\"text\" name=\"Oldpassword\" class=\"pass\"/><br>
            <span class=\"scri\">Nuova password: </span><input type=\"text\" name=\"Newpassword\" class=\"pass\"/>
            <input type=\"submit\" value=\"Salva\" class=\"invia_Pass\"/>
            </form>
            </div>
            ";
        } else {
            echo "<div id=\"passw\" class=\"dat\">Password: ".$_SESSION["password_hash"]."</div>
            <form method=\"post\" name=\"Cambia_pass\" class=\"form_u\">
            <input type=\"submit\" value=\"Cambia\" name=\"Cambio_pass\" class=\"cam_Pass\"/>
            </form>";

        }

    ?>



   

</div> 

<div class="Anagrafica">

<?php

        if(isset($_SESSION["Nome"]) && isset($_SESSION["Cognome"]) || $errPass==true){
            echo "<div id=\"name\" >Nome: ".$_SESSION["Nome"]."</div>";
            echo "<div id=\"cogn\" >Cognome: ".$_SESSION["Cognome"]."</div>";
        } else {
            echo "<div class=\"datvar\">
            <span class=\"scri\">Inserisci nome e cognome: </span><br>
            <form method=\"post\" name=\"form_anagrafica\" class=\"form_u\">
            <span class=\"scri\">Nome: </span><input type=\"text\" name=\"Nome\" class=\"name\"/><br>
            <span class=\"scri\">Cognome: </span><input type=\"text\" name=\"Cognome\" class=\"cogn\"/>
            <input type=\"submit\" value=\"Salva\" class=\"invia_anagr\"/>
            </form>
            </div>
            ";

        }

    ?>
</div>


</div>
</section>

</body>


</html>
