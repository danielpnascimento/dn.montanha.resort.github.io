
//Função para inicialização e desativação do loader para que ele não fique rodando
//em segundo plano
//var preloader = document.getElementById('loading');
var preloader = document.getElementById('loader');
function myFunction() {
    preloader.style.display = 'none';
}


//Initialize Swiper 

var swiper = new Swiper('.swiper-container', {
//    speed: 600,
    speed: 1500,
//    speed: 1000,
    parallax: true,
//    Desativando fade para deixar o flex no nav se ajustar conforme o tamanho da tela
//    e quand usa ele com conteudo que tem video ele sobrecarrega o site dando lag´s
//    effect: 'fade',
//    Efeito de scroll na horizontal
    direction: 'horizontal',
    slidesPerView: 'auto',
    mousewheel: true,

    hashNavigation: {
        replaceState: true,
        watchState: true,
    },

//Habilitando o teclado com as setas 
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

//barra de progresão das paginas
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
//  scrollbar: {
//    el: '.swiper-scrollbar',
//  },


});

