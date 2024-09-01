function changeTracklistImage(imageSrc){
    document.getElementById("tracklist-image").src = imageSrc;
}

document.getElementById("vinil-blue").addEventListener("click",function(){
    changeTracklistImage("./img/vinil_blue.png");
});

document.getElementById("vinil-pink").addEventListener("click",function(){
    changeTracklistImage("./img/vinil_pink.png");
});

document.getElementById("vinil-aquamarine").addEventListener("click",function(){
    changeTracklistImage("./img/vinil_aquamarine.png");
});

document.getElementById("vinil-sunrise").addEventListener("click",function(){
    changeTracklistImage("./img/vinil_sunrise.png");
});

document.getElementById("vinil-tangerine").addEventListener("click",function(){
    changeTracklistImage("./img/vinil_tangerine.png");
});
