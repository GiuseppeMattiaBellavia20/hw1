function populateGallery(){
        
        fetch("Recupera.php?azione=Preferiti").then(onResponse).then(onJsonRecuperaPref);

    }


    function onJsonRecuperaPref(json_rec){
        const gal=document.querySelector('#gallery');
        gal.innerHTML='';
        let num_like=json_rec.length;
        console.log(json_rec.error);
        if(json_rec.error == "no"){
            
            const scri=document.createElement('span');
            scri.classList.add('avviso');
            scri.textContent="Nessun preferito";

            gal.appendChild(scri);
        }

         for (let i = 0; i < num_like; i++) {
            
            const imgUrl = json_rec[i].url_image;
            const im = document.createElement('div');
            im.classList.add('im');
        
            const img = document.createElement('img');
            img.src = imgUrl;

            const imCuore = document.createElement('img');
        
            im.appendChild(img);
            im.appendChild(imCuore);
            gal.appendChild(im);
            }
        }
    
    function onResponse(response) {
        return response.json();
        }


        document.addEventListener('DOMContentLoaded', populateGallery);