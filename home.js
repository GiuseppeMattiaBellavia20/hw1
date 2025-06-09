function onFocus1(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur1(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='  Cerca ciò che vuoi!!';
    }
    console.log('Blur');
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

     function cerca(event){
        event.preventDefault();
        const name_input=document.querySelector('.ricerca');
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
        if(num_im>12)
            num_im=12;
    
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



    function onJsonRecAll(json_pref, json_like, json_api){
        if(json_like.error !== "no" && json_pref.error !== "no"){
        const gal=document.querySelector('#gallery');
        gal.innerHTML='';
        const num_res=json_api.hits;
        let num_like=json_like.length;
        let num_pref=json_pref.length;
        let num_im=num_res.length
        let assegna;
        let assegna_pref;
        console.log(json_api.results);
        if(num_im>50)
            num_im=50;
    
        for (let i = 0; i < num_im; i++) {
            const imgUrl = num_res[i].webformatURL;
            assegna=0;
            assegna_pref=0;
            for(let j = 0; j<num_like; j++){
                if(num_res[i].id == json_like[j]){
                    assegna = 1;
                    break;
                }
            }

            for(let j = 0; j<num_pref; j++){
                if(num_res[i].id == json_pref[j].id_image){
                    assegna_pref = 1;
                    break;
                }
            }


            const im = document.createElement('div');
            im.classList.add('im');
        
            const img = document.createElement('img');
            img.src = imgUrl;

            const imCuore = document.createElement('img');

            const idImm=num_res[i].id;
            console.log(idImm);
            imCuore.dataset.imageId = idImm;

            if(assegna==1){
                imCuore.src = "CuorePieno.png";
                imCuore.classList.add('cuorePieno');
            } else {
                imCuore.src = "CuoreVuoto.png";
                imCuore.classList.add('cuoreVuoto');
            }

            const immPref = document.createElement('img');
            immPref.setAttribute("data-imag-id", idImm);
            immPref.setAttribute("data-imag-url", imgUrl);

            if(assegna_pref==1){
                immPref.src="preferitoPieno.webp"
                immPref.classList.add('Pref');
            } else {
                immPref.src="preferiti.png"
                immPref.classList.add('noPref');
            }

            im.appendChild(img);
            im.appendChild(imCuore);
            im.appendChild(immPref);
            gal.appendChild(im);

        }
     } else {

        const gal=document.querySelector('#gallery');
        gal.innerHTML='';
        const num_res=json_api.hits;
        let num_im=num_res.length
        let assegna;
        console.log(json_api.results);
        if(num_im>50)
            num_im=50;
    
        for (let i = 0; i < num_im; i++) {
            const imgUrl = num_res[i].webformatURL;
        
            const im = document.createElement('div');
            im.classList.add('im');
        
            const img = document.createElement('img');
            img.src = imgUrl;

            const imCuore = document.createElement('img');

            const idImm=num_res[i].id;
            console.log(idImm);
            imCuore.dataset.imageId = idImm;

            imCuore.src = "CuoreVuoto.png";
            imCuore.classList.add('cuoreVuoto');

            const immPref = document.createElement('img');
            immPref.setAttribute("data-imag-id", idImm);
            immPref.setAttribute("data-imag-url", imgUrl);
            immPref.src="preferiti.png"
            immPref.classList.add('noPref');
            
            im.appendChild(img);
            im.appendChild(imCuore);
            im.appendChild(immPref);
            gal.appendChild(im);
            
        }
    }



        const like= document.querySelectorAll('.cuorePieno');
        for(const x of like){
        x.addEventListener("click", TogliLike);
        }

        const Nolike= document.querySelectorAll('.cuoreVuoto');
        for(const x of Nolike){
        x.addEventListener("click", Like);}

        const pref= document.querySelectorAll('.noPref');
        for(const x of pref){
        x.addEventListener("click", preferiti);}
        
        const noPref= document.querySelectorAll('.Pref');
        for(const x of noPref){
        x.addEventListener("click", noPreferiti);}
    }




    function populateGallery(){
        
        fetch("Api_home.php").then(onResponseHome).then(onJsonHome);

    }


    function onJsonRecLike(json_like, json_api){
        
        fetch("Recupera.php?azione=Preferiti").then(onResponse).then(json => onJsonRecAll(json, json_like, json_api));

   }

    function onJsonHome(Json){
        console.log('Jons ricevuto');
        console.log(Json);

        fetch("Recupera.php?azione=like").then(onResponse).then(json => onJsonRecLike(json, Json));

    }
    
    function onResponseHome(response) {
        return response.json();
        }

        function TogliLike(event){
            const cuore = event.currentTarget;
            cuore.classList.remove('cuorePieno');
            cuore.classList.add('cuoreVuoto');
            cuore.src = "CuoreVuoto.png";

            cuore.removeEventListener("click", TogliLike);
            cuore.addEventListener("click", Like);

            const idImm = encodeURIComponent(cuore.dataset.imageId);
            console.log("Imm con id: "+idImm)
            fetch("AggiungiLike.php?imageId="+idImm+"&action=remove");
            
        }


        function Like(event){
            const cuore = event.currentTarget;
            cuore.classList.remove('cuoreVuoto');
            cuore.classList.add('cuorePieno');
            cuore.src = "CuorePieno.png";

            cuore.removeEventListener("click", Like);
            cuore.addEventListener("click", TogliLike);
            
            const idImm = encodeURIComponent(cuore.dataset.imageId);
            console.log("Imm con id: "+idImm)
            fetch("AggiungiLike.php?imageId="+idImm);
        }


        function preferiti(event){
            const pref = event.currentTarget;
            pref.classList.remove('noPref');
            pref.classList.add('Pref');
            pref.src = "preferitoPieno.webp";

            pref.removeEventListener("click", preferiti);
            pref.addEventListener("click", noPreferiti);
            
            const idImm = encodeURIComponent(pref.dataset.imagId);
            const immUrl = encodeURIComponent(pref.dataset.imagUrl);
            console.log("Imm con id: "+idImm)
            fetch("gestisciPref.php?imageId="+idImm+"&imgUrl="+immUrl);
        }

        function noPreferiti(event){
            const pref = event.currentTarget;
            pref.classList.remove('Pref');
            pref.classList.add('noPref');
            pref.src = "Preferiti.png";

            pref.removeEventListener("click", noPreferiti);
            pref.addEventListener("click", preferiti);
            
            const idImm = encodeURIComponent(pref.dataset.imagId);
            console.log("Imm con id: "+idImm)
            fetch("gestisciPref.php?imageId="+idImm);
        }

const text1= document.querySelector(".ricerca");
text1.addEventListener("focus", onFocus1);
text1.addEventListener("blur", onBlur1);

const men_3linee=document.querySelector("#menu-3linee");
men_3linee.addEventListener("click", apriMenu3Linee);

const x_3_linee=document.querySelector("#x-menu-3linee");
x_3_linee.addEventListener("click", chiudiMenu3Linee);

const form=document.querySelector('#form1');
form.addEventListener('submit', cerca);

const DisRic=document.querySelector("#X_alb");
DisRic.addEventListener('click', DisattivaRicerca);

document.addEventListener('DOMContentLoaded', populateGallery);

