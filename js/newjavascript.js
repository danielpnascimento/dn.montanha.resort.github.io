window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

//Função para inicialização e desativação do loader para que ele não fique rodando
//em segundo plano
var preloader = document.getElementById('loader');
function myFunction() {
    preloader.style.display = 'none';
}


//Initialize Swiper 

var swiper = new Swiper('.swiper-container', {
    speed: 1500,
    parallax: true,
    direction: 'horizontal',
    slidesPerView: 'auto',
    mousewheel: true,

    hashNavigation: {
        replaceState: true,
        watchState: true
    },

//Habilitando o teclado com as setas 
    keyboard: {
        enabled: true,
        onlyInViewport: false
    },

//Barra de progressão das paginas
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});

