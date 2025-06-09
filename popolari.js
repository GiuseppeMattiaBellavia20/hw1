function riempiGalleria(){
        
        fetch("Api_home.php").then(onResponse).then(onJson);

    }


    function onJsonRecPop(json_rec, json_api){
        console.log(json_rec);
        const gal=document.querySelector('#gallery');
        gal.innerHTML='';
        const num_res=json_api.hits;
        let num_pop=json_rec.length;
        let num_im=num_res.length
        console.log(json_api.results);

        for (let i = 0; i < num_pop; i++) {
            for(let j = 0; j<num_im; j++){
            console.log(json_rec[i]);
            console.log(num_res[i].id);
            if(num_res[j].id == json_rec[i]){
                console.log("Foto con id:"+num_res[1].id);
            const imgUrl = num_res[j].webformatURL;
            const im = document.createElement('div');
            im.classList.add('im');
        
            const img = document.createElement('img');
            img.src = imgUrl;
        
            im.appendChild(img);
            gal.appendChild(im);
                }
            }
          }
    }

  
 

    function onJson(Json){
        console.log('Jons ricevuto');
        console.log(Json);

        fetch("Recupera.php?azione=popolari").then(onResponse).then(json => onJsonRecPop(json, Json));

    }
    
    function onResponse(response) {
        return response.json();
        }







document.addEventListener('DOMContentLoaded', riempiGalleria);