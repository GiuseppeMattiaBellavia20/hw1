
function onFocus1(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur1(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Cerca idee per cene facili, moda e molto altro.';
    }
    console.log('Blur');
}

function onFocus2(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur2(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Email';
    }
    console.log('Blur');
}

function onFocus3(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur3(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Crea una password';
    }
    console.log('Blur');
}

function onFocus4(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur4(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='gg/mm/aaaa';
    }
    console.log('Blur');
}

function onFocusemail(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBluremail(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Email';
    }
    console.log('Blur');
}

function onFocuspassword(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlurpassword(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Crea una password';
    }
    console.log('Blur');
}

function onFocusdata(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlurdata(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='gg/mm/aaaa';
    }
    console.log('Blur');
}

function onFocusemaillog(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBluremaillog(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Email';
    }
    console.log('Blur');
}

function onFocuspasswordlog(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlurpasswordlog(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Crea una password';
    }
    console.log('Blur');
}


function cambiaim3_4(event){
const img=event.currentTarget;
img.src='im3.4.2.jpg';
}

function registrazione(event){
event.preventDefault();
const regis=document.querySelector('#men-iscr');
document.body.classList.add('no-scroll');
regis.style.top=window.pageYOffset + 'px';
regis.classList.remove('hidden');
}

function regesc(){
    document.querySelector('#men-iscr').classList.add('hidden');
    document.body.classList.remove('no-scroll');
    console.log('Menù registrazioine nascoscto');
}

    function apriMenu3Linee(event){
        event.preventDefault();
        const men=document.querySelector('#men-3linee-open');
        const xmen=document.querySelector('#x-menu-3linee');
        men.classList.remove('hidden');
        event.currentTarget.classList.add('hidden');
        xmen.classList.remove('hidden');
        
        }

    function chiudiMenu3Linee(event){
        const men2=document.querySelector('#men-3linee-open');
        const men3linee=document.querySelector('#menu-3linee');
        event.currentTarget.classList.add('hidden');
        men2.classList.add('hidden');
        men3linee.classList.remove('hidden');
    }

    function ModNotte(){
        const nav=document.querySelectorAll('.white');
        for(const n of nav){
        n.classList.remove('white');
        n.classList.add('gray');
        }
        const menu=document.querySelectorAll('.menu');
        for(const m of menu){
        m.classList.remove('menu');
        m.classList.add('menuVariant');
        }

        const esp=document.querySelector('.esp');
        esp.classList.remove('esp');
        esp.classList.add('espVariant');

        const int1=document.querySelector('.int1');
        int1.classList.remove('int1');
        int1.classList.add('int1Variant');

        const int2=document.querySelector('.int2');
        int2.classList.remove('int2');
        int2.classList.add('int2Variant');

        const men=document.querySelectorAll('.menu-iscr');
        for(const m of men){
        m.classList.remove('menu-iscr');
        m.classList.add('menu-iscrVar');
        }

        const log=document.querySelectorAll('.menu-log');
        for(const l of log){
            l.classList.remove('menu-log');
            l.classList.add('menu-logVar');
        }

        const fine=document.querySelector('.fine');
        fine.classList.remove('fine');
        fine.classList.add('fineVar');

    }

    function ModGiorno(){
        const nav=document.querySelectorAll('.gray')
        for(const n of nav){
        n.classList.remove('gray');
        n.classList.add('white');}
        const menu=document.querySelectorAll('.menuVariant');
        for(const m of menu){
        m.classList.remove('menuVariant');
        m.classList.add('menu');
        }

        const esp=document.querySelector('.espVariant')
        esp.classList.remove('espVariant');
        esp.classList.add('esp');

        const int1=document.querySelector('.int1Variant');
        int1.classList.remove('int1Variant');
        int1.classList.add('int1');

        const int2=document.querySelector('.int2Variant');
        int2.classList.remove('int2Variant');
        int2.classList.add('int2');

        const men=document.querySelectorAll('.menu-iscrVar');
        for(const m of men){
        m.classList.remove('menu-iscrVar');
        m.classList.add('menu-iscr');
        }

        const log=document.querySelectorAll('.menu-logVar');
        for(const l of log){
            l.classList.remove('menu-logVar');
            l.classList.add('menu-log');
        }

        const fine=document.querySelector('.fineVar');
        fine.classList.remove('fineVar');
        fine.classList.add('fine');

    }

    function cambiaf(event){
        event.preventDefault();
        const im1_2=document.querySelector('.im1-2');
        const im2_2=document.querySelector('.im2-2');
        const im3_2=document.querySelector('.im3-2');
        const im4_2=document.querySelector('.im4-2');

        im1_2.src='im1.2.1.jpg';
        im2_2.src='im2.2.1.jpg';
        im3_2.src='im3.2.1.jpg';
        im4_2.src='im4.2.1.jpg';
    }

    function cerca(event){
        event.preventDefault();
        const name_input=document.querySelector('#testo_ricerca');
       const name_value= encodeURIComponent(name_input.value);
        console.log('Stampo l imput: ' + name_value);
    
        const alb=document.querySelector('#Album_foto');
        alb.classList.remove('hidden');
        document.body.classList.add('no-scroll');
        alb.style.top=window.pageYOffset + 'px';

        const Xalb=document.querySelector('#X_alb');
        Xalb.classList.remove('hidden');
        Xalb.style.top=window.pageYOffset + 'px';
        
        fetch("Api_immagini.php?q="+name_value).then(onResponse).then(json => onJson(json, name_value));
      }
      
    function onJson(json, value){
        console.log('Jons ricevuto');
        console.log(json);
        const lib=document.querySelector('#Album_foto');
        lib.innerHTML='';
        const num_res=json.hits;
        let num_im=num_res.length
        console.log(json.results);
        if(num_im>25)
            num_im=25;
    
        for (let i = 0; i < num_im; i++) {
            const imgUrl = num_res[i].webformatURL;
            const book = document.createElement('div');
            book.classList.add('im');
        
            const img = document.createElement('img');
            img.src = imgUrl;
        
            const caption = document.createElement('span');
            caption.textContent = value;
        
            book.appendChild(img);
            book.appendChild(caption);
            lib.appendChild(book);
          }
    }
    
    function onResponse(response) {
        return response.json();
        }

    function DisattivaRicerca(event){
        const lib = document.querySelector('#Album_foto');
    lib.classList.add('hidden');

    const chiudi = document.querySelector('#X_alb');
    chiudi.classList.add('hidden');

    document.body.classList.remove('no-scroll');

    }

    function ventoinkmh(ms){
        return ms * 3.6;
    }

    function cerca2(event) {
       console.log('Evento submit intercettato');
        event.preventDefault();
        
        const citta=document.querySelector("#citta").value;
        console.log(citta);
    
        let lat;
        let lon;
    
        if(citta == 'Milano'){
            lat = '45.4667';
            lon = '9.1911';
        } else if(citta == 'Roma'){
            lat = '41.89';
            lon = '12.48';
        } else if(citta == 'Catania'){
            lat = '37.50267';
            lon = '15.08727';
        } else if(citta == 'Berlino'){
            lat = '52.5';
            lon = '13.3';
        } else if(citta == 'Varsavia'){
            lat = '52.2323';
            lon = '21.00843';
        } else if(citta == 'Parigi'){
            lat = '48.85667';
            lon = '2.35194';
        } else if(citta == 'Palermo'){
            lat = '38.11566';
            lon = '13.36126';
        } else if(citta == 'Verona'){
            lat = '45.43861';
            lon = '10.99278';
        } else if(citta == 'Torino'){
            lat = '45.07917';
            lon = '7.67611';
        } else if(citta == 'Napoli'){
            lat = '40.83583';
            lon = '14.24861';
        } else if(citta == 'Venezia'){
            lat = '45.43972';
            lon = '12.33194';
        } else if(citta == 'Firenze'){
            lat = '43.77139';
            lon = '11.25417';
        } else if(citta == 'New_York'){
            lat = '40.71667';
            lon = '-74';
        }  else if(citta == 'Santiago_De_Compostela'){
            lat = '42.88252';
            lon = '-8.54131';
        } else if (citta === 'Londra') {
            lat = '51.5074'; 
            lon = '-0.1278';
        } else if (citta === 'Tokyo') {
            lat = '35.6895'; 
            lon = '139.6917';
        } else if (citta === 'Sydney') {
            lat = '-33.8688'; 
            lon = '151.2093';
        } else if (citta === 'Mumbai') {
            lat = '19.0760'; 
            lon = '72.8777';
        } else if (citta === 'Pechino') {
            lat = '39.9042'; 
            lon = '116.4074';
        } else if (citta === 'Mosca') {
            lat = '55.7558'; 
            lon = '37.6173';
        } else if (citta === 'Rio_de_Janeiro') {
            lat = '-22.9068'; 
            lon = '-43.1729';
        } else if (citta === 'Il_Cairo') {
            lat = '30.0444'; 
            lon = '31.2357';
        } else if (citta === 'Citta_del_Capo') {
            lat = '-33.9249'; 
            lon = '18.4241';
        } else if (citta === 'Dubai') {
            lat = '25.2048'; 
            lon = '55.2708';
        } else if (citta === 'Singapore') {
            lat = '1.3521'; 
            lon = '103.8198';
        } else if (citta === 'Los_Angeles') {
            lat = '34.0522'; 
            lon = '-118.2437';
        } else if (citta === 'Chicago') {
            lat = '41.8781'; 
            lon = '-87.6298';
        } else if (citta === 'Istanbul') {
            lat = '41.0082'; 
            lon = '28.9784';
        } else if (citta === 'Bangkok') {
            lat = '13.7563'; 
            lon = '100.5018';
        } else if (citta === 'Citta_del_Messico') {
            lat = '19.4326'; 
            lon = '-99.1332';
        } else if (citta === 'Buenos_Aires') {
            lat = '-34.6037'; 
            lon = '-58.3816';
        } else if (citta === 'Toronto') {
            lat = '43.6532'; 
            lon = '-79.3832';
        } else if (citta === 'Madrid') {
            lat = '40.4168'; 
            lon = '-3.7038';
        } else if (citta === 'Seul') {
            lat = '37.5665'; 
            lon = '126.9780';
        } else if (citta === 'Jakarta') {
            lat = '-6.2088'; 
            lon = '106.8456';
        } else if (citta === 'Auckland') {
            lat = '-36.8485'; 
            lon = '174.7633';
        } else if (citta === 'Montreal') {
            lat = '45.5017'; 
            lon = '-73.5673';
        } else if (citta === 'Honolulu') {
            lat = '21.3069'; 
            lon = '-157.8583';
        } else if (citta === 'Reykjavik') {
            lat = '64.1265'; 
            lon = '-21.8174';
        } else if (citta === 'Genova') {
            lat = '44.4056';    lon = '8.9463';
        } else if (citta === 'Bari') {
            lat = '41.1171';    lon = '16.8719';
        } else if (citta === 'Bologna') {
            lat = '44.4949';    lon = '11.3426';
        } else if (citta === 'Trieste') {
            lat = '45.6495';    lon = '13.7768';
        } else if (citta === 'Pisa') {
            lat = '43.7228';    lon = '10.4017';
        } else if (citta === 'Perugia') {
            lat = '43.1107';    lon = '12.3908';
        } else if (citta === 'Lecce') {
            lat = '40.3515';    lon = '18.1750';
        } else if (citta === 'Ancona') {
            lat = '43.6158';    lon = '13.5189';
        } else if (citta === 'Parma') {
            lat = '44.8015';    lon = '10.3279';
        } else if (citta === 'Salerno') {
            lat = '40.6824';    lon = '14.7681';
        } else if (citta === 'Amsterdam') {
            lat = '52.3676';    lon = '4.9041';
        } else if (citta === 'Vancouver') {
            lat = '49.2827';    lon = '-123.1207';
        } else if (citta === 'Cape_Town') {
            lat = '-33.9249';   lon = '18.4241';
        } else if (citta === 'Nairobi') {
            lat = '-1.2921';    lon = '36.8219';
        } else if (citta === 'Oslo') {
            lat = '59.9139';    lon = '10.7522';
        } else if (citta === 'Stockholm') {
            lat = '59.3293';    lon = '18.0686';
        } else if (citta === 'Lisbon') {
            lat = '38.7223';    lon = '-9.1393';
        } else if (citta === 'San_Francisco') {
            lat = '37.7749';    lon = '-122.4194';
        } else if (citta === 'Hong_Kong') {
            lat = '22.3193';    lon = '114.1694';
        } else if (citta === 'Melbourne') {
            lat = '-37.8136';   lon = '144.9631';
        }
        
    
        fetch("Api_meteo.php?lat="+lat+"&lon="+lon)
            .then(onResponse2)
            .then(onJson2)
    }
    
    function onResponse2(response) {
        console.log("Risposta API:", response);
        return response.json();
    }
    
    function onJson2(json) {
        console.log("Dati JSON:", json);
    
        const cont=document.querySelector('#view_meteo');
        cont.innerHTML='';
    
        const nomeCitta = json.name;
        const temperatura = json.main.temp;
        const descrizione = json.weather[0].description;
        const umidita=json.main.humidity;
        const max_temp=json.main.temp_max;
        const min_temp=json.main.temp_min;
        const visibilita=json.visibility;
        const vento=json.wind.speed;
        console.log(vento);
        const ventoKmh=ventoinkmh(vento);
        const icona=json.weather[0].icon;
    
        const span1=document.createElement('span');
        span1.textContent='Meteo a ' + nomeCitta;
        const span2=document.createElement('span');
        span2.textContent='Temperatura: '+ temperatura + '°C';
        const span3=document.createElement('span');
        span3.textContent='Condizioni: ' + descrizione;
        const span4=document.createElement('span');
        span4.textContent='Umidità: ' + umidita +'%';
        const span5=document.createElement('span');
        span5.textContent='Temperatura massima: ' + max_temp +'°C';
        const span6=document.createElement('span');
        span6.textContent='Temperatura minima: ' + min_temp +'°C';
        const span7=document.createElement('span');
        span7.textContent='Visibilità: ' + visibilita +' M';
        const span8=document.createElement('span');
        span8.textContent='Velocità del vento: ' + ventoKmh.toFixed(2) +'Km/h';
        const icon=document.createElement('img');
        const urlIcon='https://openweathermap.org/img/wn/' + icona + '@2x.png';
        icon.src=urlIcon;
    
        cont.appendChild(span1);
        cont.appendChild(span2);
        span3.appendChild(icon);
        cont.appendChild(span3);
        cont.appendChild(span4);
        cont.appendChild(span5);
        cont.appendChild(span6);
        cont.appendChild(span7);
        cont.appendChild(span8);


    }

    function onJsonContrEmail(json, event){
        console.log(json);
        const em=document.querySelector(".email-testo").value;
        const email_num=json.length;

        for(let i=0; i<email_num; i++){
            if(em == json[i]){
            alert("Email già nel sistema, andare al login.");
            return;
            }
        }

        event.target.submit();
    }


    function validazione(event){
        event.preventDefault();
        const pass=document.querySelector(".pass-testo").value;
        console.log(pass);
        const simbol = "!@#$%^&*(),.?:{}|<>";
        console.log(simbol);
        let hasUpper = false, hasLower = false, hasNumber = false, hasSymbol = false;
            for (const ch of pass) {
            if (ch >= 'A' && ch <= 'Z') hasUpper = true;
            else if (ch >= 'a' && ch <= 'z') hasLower = true;
            else if (ch >= '0' && ch <= '9') hasNumber = true;
            else { 
                for(let j = 0; j < 19; j++){
                        if(ch === simbol[j]){
                    hasSymbol = true;
                    console.log("Simbolo trovato");
                    }
                }
             }
            }
            if (!hasUpper || !hasLower || !hasNumber || !hasSymbol || pass.length < 8) {
            alert("La password deve avere minimo 8 caratteri, tra cui almeno una maiuscola, una minuscola, un numero e un simbolo.");
            return;
            }

            fetch("Recupera.php?azione=email").then(onResponse).then(json => onJsonContrEmail(json, event)); 
            
        }




const text1= document.querySelector(".ric-testo");
text1.addEventListener("focus", onFocus1);
text1.addEventListener("blur", onBlur1);

/*const textem= document.querySelectorAll(".email-testo");
for(const em of textem){
  em.addEventListener("focus", onFocus2);
  em.addEventListener("blur", onBlur2);  
}


const textpass= document.querySelectorAll(".pass-testo");
for(const pas of textpass){
pas.addEventListener("focus", onFocus3);
pas.addEventListener("blur", onBlur3);
}

const textdata= document.querySelectorAll(".data-testo");
for(const dat of textdata){
dat.addEventListener("focus", onFocus4);
dat.addEventListener("blur", onBlur4);
}*/

const im3_4=document.querySelector('.im3-4cambio');
im3_4.addEventListener('click', cambiaim3_4);

/*const log= document.querySelectorAll('.spec');
for(const sp of log){
sp.addEventListener("click", login);
}*/
const nascondi_log= document.querySelectorAll('.X2');
for(const x2 of nascondi_log){
x2.addEventListener("click", logesc);
}

const reg= document.querySelectorAll('.spec2');
for(const sp2 of reg){
sp2.addEventListener("click", registrazione);
}
const nascondi_reg= document.querySelectorAll('.X');
for(const x of nascondi_reg){
x.addEventListener("click", regesc);
}

const men_3linee=document.querySelector("#menu-3linee");
men_3linee.addEventListener("click", apriMenu3Linee);

const x_3_linee=document.querySelector("#x-menu-3linee");
x_3_linee.addEventListener("click", chiudiMenu3Linee);

const notte=document.querySelector(".ModNotte");
notte.addEventListener("click", ModNotte);

const giorno=document.querySelector(".ModGiorno");
giorno.addEventListener("click", ModGiorno);

const CambiaFoto=document.querySelector(".art1-foto");
CambiaFoto.addEventListener("click", cambiaf);
 
const form=document.querySelector('#form1');
form.addEventListener('submit', cerca);

const DisRic=document.querySelector("#X_alb");
DisRic.addEventListener('click', DisattivaRicerca);

const meteoForm = document.querySelector("#form2");
meteoForm.addEventListener('submit', cerca2);

if (meteoForm) {
    console.log("Il form è stato trovato.");
    meteoForm.addEventListener("submit", cerca2);
} else {
    console.log('Il form con id #form2 non è stato trovato');
}

const valid= document.querySelector(".form-menu-el");
valid.addEventListener("submit", validazione);
