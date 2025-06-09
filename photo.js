let LISTA = 0;

function createImage(src){
    const im= document.createElement('img');
    im.src=src;
    return im;
}

function cambiaAlbum(event){
    const ind=parseInt(event.currentTarget.dataset.index);
    const imc= document.querySelector('#im');
    if(ind === 1)
    {
        imc.innerHTML='';
        LISTA = 0;

    } else if(ind === 2){
     imc.innerHTML='';
     LISTA = 1;

    }

    const albumView= document.querySelector("#im");
    if(LISTA === 0){
    for(let i = 0; i < PHOTO_LIST.length; i++){
        const photoSrc=PHOTO_LIST[i];
        const im = createImage(photoSrc);
        albumView.appendChild(im);
        const tes= document.querySelector('.int2, .int2Variant');
        tes.textContent= "Idee per ricette quotidiane";
        tes.classList.remove('blue');
    }
    } else if(LISTA === 1){
        for(let i = 0; i < PHOTO_LIST2.length; i++){
        const photoSrc2=PHOTO_LIST2[i];
        const im2 = createImage(photoSrc2);
        albumView.appendChild(im2);
        const tes2= document.querySelector('.int2, .int2Variant');
        tes2.textContent= "Idee per pranzi in famiglia";
        tes2.classList.add('blue');
    }
}

}

const albumView= document.querySelector("#im");
if(LISTA === 0){
for(let i = 0; i < PHOTO_LIST.length; i++){
    const photoSrc=PHOTO_LIST[i];
    const im = createImage(photoSrc);
    albumView.appendChild(im);
}
} else if(LISTA === 1){
    for(let i = 0; i < PHOTO_LIST2.length; i++){
        const photoSrc2=PHOTO_LIST2[i];
        const im2 = createImage(photoSrc2);
        albumView.appendChild(im2);
    }
}

const cambioImm=document.querySelectorAll(".albumim");
for(const alb of cambioImm){
alb.addEventListener("click", cambiaAlbum);
}