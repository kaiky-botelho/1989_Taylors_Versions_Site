//Mudar a imagem

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

//Mostrar items no mobile

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.mobile-menu-icon img');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Abrir e fechar o menu ao clicar no ícone
    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    // Fechar o menu quando clicar fora dele
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            mobileMenu.classList.remove('open');
        }
    });
});