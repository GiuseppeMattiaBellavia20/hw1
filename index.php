<?php
session_start();
$error = FALSE;

if(isset($_SESSION["email"])){
    header("Location: home.php");
    exit;
}

if(isset($_POST["email"]) && isset($_POST["password"])){

    if($_POST["email"] == '' || $_POST["password"] == ''){
        $error = TRUE;
    }
    
    $conn = mysqli_connect("localhost", "root", "", "pintarest_uni") or die('Connessione fallita: '.mysqli_connect_error());
    $email=mysqli_real_escape_string($conn, $_POST["email"]);
    $password=mysqli_real_escape_string($conn, $_POST["password"]);
    $date_of_birth=mysqli_real_escape_string($conn, $_POST["date_of_birth"]);
    $query = "INSERT INTO users(email, password_hash, date_of_birth) VALUES('$email', '$password', '$date_of_birth')";

    $res = mysqli_query($conn, $query);


}

?>

<html>

<head>
    <title>Pintarest</title>
    <link rel="stylesheet" href="index.css" />
    <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="index.js" defer></script>
    <script src="photo-list.js" defer></script>
    <script src="photo-list2.js" defer></script>
    <script src="photo.js" defer></script>
</head>

<body>
<nav class="white">
  <a href=""><div id="impint"> <img id="img1" src="logopintarest.png" /></div></a>
   <div class="esp"><a href=""> Esplora</a></div> 
   <div class="ricerca"><img class="lente-gray" src="imLente.png" />
        <form id="form1">
            <input id="testo_ricerca" class="ric-testo" type="text" value="Cerca idee per cene facili, moda e molto altro." />
            <input type="submit" id="submit" value="Cerca">
        </form>
    </div>
   <div id="flex-conteiner">
        <div class="menu"><a href="">Informazioni</a></div>
        <div class="menu"><a href="">Aziende</a></div>
        <div class="menu"><a href="">Stampa</a></div>
        <div class="iscr">
            <a href="login.php"><div class="spec">Accedi</div></a>
            <a href=""><div class="spec2">Registrati</div></a>
        </div>   
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

<section id='Album_foto' class="hidden">
</section>
<div id="X_alb" class="hidden"><img src="imX.png" /></div>
<div id="men-3linee-open" class="hidden">
    <div class="menu"><a href="">Informazioni</a></div>
    <div class="menu"><a href="">Aziende</a></div>
    <div class="menu"><a href="">Stampa</a></div>
    <a href="login.php"><div class="spec">Accedi</div></a>
    <a href=""><div class="spec2">Registrati</div></a>
</div>

<header class="white">
    <div class="ModNotte"></div>
    <div class="ModGiorno"></div>
    <h1 class="int1">Trova altre</h1>
    <h2 class="int2">Idee per ricette quotidiane</h2>
</header>

<div id="selezioneImmagini" class="white">
    <div class="albumim" data-index="1"></div>
    <div class="albumim" data-index="2"></div>
</div>

<section class="white">
    <div id="contenitore">
       <div id="im"></div>
    </div>
</section>

    <div id="men-iscr" class="hidden">
        <div class="menu-iscr">
            <div class="logo"><img src="LogoP.png" /></div>
            <div class="X"><img src="imX.png" /></div>
            <div class="scri1-art4">Ti diamo il benvenuto su pintarest</div>
            <div class="scri2-art4">Scopri nuove idee da provare</div>
            <div class="menu-el">
                <?php

                if($error == TRUE){
                    echo "<span class=\"red\">Credenzioli non valide, campi vuoti!!!</span>";
                }

                ?>
            <form class="form-menu-el" method="post" name="form_insc">
                Email
                <div class="sezione"><input type="text" class="email-testo" name="email"/> </div>
                Password
                <div class="sezione"><input type="text" class="pass-testo" name="password"/></div>
                <div class="data">Data di nascita <div class="inf"> <img src="inf.png" /> <div class="box-info"><p>Per mantenere Pinterest un luogo sicuro, 
                    ora richiediamo la tua data di nascita. La tua data di nascita ci aiuta anche a fornire suggerimenti 
                    più personalizzati e annunci pertinenti. Non condivideremo queste informazioni senza la tua autorizzazione
                     e non saranno visibili sul tuo profilo.</p></div> </div></div>
                <div class="sezione"><input type="text" class="data-testo" name="date_of_birth"/></div>
                <input class="cont" type="submit" value="Continua">
            </form>
                    <strong>Oppure</strong>
                <a href="">
                    <div class="google">
                        <div class="cont"><img src="google-logo.png" />Continua con google</div>
                    </div>
                </a>
                
            </div>
            <div class="info-reg">
                Continuando, accetti <a class="info-link" href="" > i Termini di servizio </a> di 
                Pinterest e dichiari di aver letto le nostre <a class="info-link" href="" >Norme sulla privacy</a>. 
                <a class="info-link" href="" >Avviso sulla raccolta.</a> 
            </div>

            <div class="tasto-accedi">Hai gia un account? <a href=""><strong>Accedi</strong></a></div>
        </div>
    </div>

<footer>
    <div class="fooit">
        <h4><a href="">Ecco come funziona</a></h4>
    </div>
</footer>

<article>
    <div class="art1">
        <a href="" class="art1-foto">
            <div id="area1">
                <div id="im1-2"><img class="im1-2" src="im1.2.png" /></div>
                <div id="im2-2"><img class="im2-2" src="im2.2.png" /></div>
                <div id="im3-2"><img class="im3-2" src="im3.2.png" /></div>
                <div id="im4-2"><img class="im4-2" src="im4.2.png" /></div>
                <div id="scritta">
                    <div class="scri">
                        <div id="lente"><img src="lente.png" /></div>
                        <div class="scrih2"><h2>Cena facile a base di <br> pollo</h2></div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="art1">
        <div id="meteo">
            <h1>Meteo</h1>
            <form id="form2">
                Inserisci una citta:
                <select id="citta">
                    <option value="Milano">Milano</option>
                    <option value="Roma">Roma</option>
                    <option value="Catania">Catania</option>
                    <option value="Palermo">Palermo</option>
                    <option value="Verona">Verona</option>
                    <option value="Torino">Torino</option>
                    <option value="Napoli">Napoli</option>
                    <option value="Venezia">Venezia</option>
                    <option value="Firenze">Firenze</option>
                    <option value="Genova">Genova</option>
                    <option value="Bari">Bari</option>
                    <option value="Bologna">Bologna</option>
                    <option value="Trieste">Trieste</option>
                    <option value="Pisa">Pisa</option>
                    <option value="Perugia">Perugia</option>
                    <option value="Lecce">Lecce</option>
                    <option value="Ancona">Ancona</option>
                    <option value="Parma">Parma</option>
                    <option value="Salerno">Salerno</option>
                    <option value="Berlino">Berlino</option>
                    <option value="Varsavia">Varsavia</option>
                    <option value="Parigi">Parigi</option>
                    <option value="New_York">New York</option>
                    <option value="Santiago_De_Compostela">Santiago de compostela</option>
                    <option value="Londra">Londra</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pechino">Pechino</option>
                    <option value="Mosca">Mosca</option>
                    <option value="Rio_de_Janeiro">Rio de Janeiro</option>
                    <option value="Il_Cairo">Il Cairo</option>
                    <option value="Citta_del_Capo">Città del Capo</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Los_Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Bangkok">Bangkok</option>
                    <option value="Citta_del_Messico">Città del Messico</option>
                    <option value="Buenos_Aires">Buenos Aires</option>
                    <option value="Toronto">Toronto</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Seul">Seul</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Montreal">Montreal</option>
                    <option value="Honolulu">Honolulu</option>
                    <option value="Reykjavik">Reykjavik</option>     
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Cape_Town">Cape Town</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Oslo">Oslo</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Lisbon">Lisbon</option>
                    <option value="San_Francisco">San Francisco</option>
                    <option value="Hong_Kong">Hong Kong</option>
                    <option value="Melbourne">Melbourne</option> 
                </select>
                <input type="submit" id="submit2" value="Cerca">
            </form>

            <div id="view_meteo">

            </div>
        </div>
        <div id="area2">
            <h1>Cerca un'idea</h1>
            <h2>Che cosa vorresti provare ora? Pensa a qualcosa che ti piace, come "cena facile a base di pollo" e guarda i risultati.</h2>
            <a href=""><div class="esp2">Esplora</div></a>
        </div>
    </div>
</article>

<article>
    <div class="art2">
        <div id=area1-2>
            <div id="scritta1">Salva le idee che ti piacciono</div>
            <div id="scritta2">Raccogli le tue idee preferite per ritrovarle in seguito.</div>
            <a href=""><div class="esp2">Esplora</div></a>
        </div>
    </div>
    <div class="art2">
        <div id="area2-2">
            <a href="">
                <div id="im1-3">
                    <div id="overlay"></div>
                        
                    <div id="scri-im1-3">Felci per la mia futura casa</div>
                    <div id="im1-3-1"><img src="im1.3.1.png" /></div>
                    <div id="im1-3-2"><img src="im1.3.2.png" /></div>
                    <div id="im1-3-3"><img src="im1.3.3.png" /></div>
                </div>
            </a>
            <a href="">
                <div id="im2-3">
                    <div id="scri-im2-3">Camera in stile scandinavo</div>
                    <img src="im2.3.png" />
                </div>
            </a>
            <a href="">
                <div id="im3-3">
                    <div id="scri-im3-3">La casa dei miei sogni</div>
                    <img src="im3.3.png" />
                </div>
            </a>
            <a href="">
                <div id="im4-3">
                    <div id="scri-im4-3">Un bagno tutto nuovo</div>
                    <img src="im4.3.png" />
                </div>
            </a>
            <a href="">
                <div id="im5-3">
                    <div id="scri-im5-3">Drink serviti con stile</div>
                    <img src="im5.3.png" />
                </div>
            </a>
        </div>
    </div>
</article>

<article>
    <div class="art3">
        <div id="im1-4"></div>
        <div id="cont-im2-4">
            <div id="im2-4">
                <div class="im3-4"><img src="im3.4.png" class="im3-4cambio" /></div>
                <div id="scri-art3-area1"><strong>Scout the City</strong>  56.7k followers</div>
            </div> 
        </div> 
    </div>
    <div class="art3">
        <div id="flex-conteiner-art3-area2">
            <div id="scri1-art3-area2">See it, make it, try it, do it</div>  
            <div id="scri2-art3-area2">Pinterest ti fa scoprire nuove cose e idee di persone provenienti da tutto il mondo.</div>
            <a href="">
                <div class="esp2">Esplora</div>
            </a>
        </div>
    </div>
</article>

<article>
    <div id="art4">
        <div id="im1-5">
            <div id="overlay-im1-5"></div>
                <div id="scri-im1-5">Registrati per raccogliere le idee </div> 
        </div>
        <div class="menu-iscr">
            <div class="logo"><img src="LogoP.png" /></div>
            <div class="scri1-art4">Ti diamo il benvenuto su pintarest</div>
            <div class="scri2-art4">Scopri nuove idee da provare</div>
            <div class="menu-el">
                <?php

                if($error == TRUE){
                    echo "<span class=\"red\">Credenzioli non valide, campi vuoti!!!</span>";
                }

                ?>
            <form class="form-menu-el" method="post" name="form_insc">
                Email
                <div class="sezione"><input type="text" class="email-testo" name="email"/> </div>
                Password
                <div class="sezione"><input type="text" class="pass-testo" name="password"/></div>
                <div class="data">Data di nascita <div class="inf"> <img src="inf.png" /> <div class="box-info"><p>Per mantenere Pinterest un luogo sicuro, 
                    ora richiediamo la tua data di nascita. La tua data di nascita ci aiuta anche a fornire suggerimenti 
                    più personalizzati e annunci pertinenti. Non condivideremo queste informazioni senza la tua autorizzazione
                     e non saranno visibili sul tuo profilo.</p></div> </div></div>
                <div class="sezione"><input type="text" class="data-testo" name="date_of_birth"/></div>
                <input class="cont" type="submit" value="Continua">
            </form>
                    <strong>Oppure</strong>
                <a href="">
                    <div class="google">
                        <div class="cont"><img src="google-logo.png" />Continua con google</div>
                    </div>
                </a>
                
            </div>
            <div class="info-reg">
                Continuando, accetti <a class="info-link" href="" > i Termini di servizio </a> di 
                Pinterest e dichiari di aver letto le nostre <a class="info-link" href="" >Norme sulla privacy</a>. 
                <a class="info-link" href="" >Avviso sulla raccolta.</a> 
            </div>

            <div class="accedi2">Hai gia un account? <a href=""><strong>Accedi</strong></a></div>
        </div>
    </div>
</article>


<footer class="fine">
    <div class="info-fine"><a href="">Termini di utilizzo</a></div>
    <div class="info-fine"><a href="">Politica sulla riservatezza</a></div>
    <div class="info-fine"><a href="">Aiuto</a></div>
    <div class="info-fine"><a href="">Applicazione per iPhone</a></div>
    <div class="info-fine"><a href="">Applicazione Android</a></div>
    <div class="info-fine"><a href="">Utenti</a></div>
    <div class="info-fine"><a href="">Collezioni</a></div>
    <div class="info-fine"><a href="">Shopping</a></div>
    <div class="info-fine"><a href="">Esplorare</a></div>
    <div class="info-fine"><a href="">Avviso per i non utenti</a></div>
</footer>

</body>




</html>