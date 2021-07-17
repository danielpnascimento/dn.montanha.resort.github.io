

/////Instalações\\\\
//Slider do instalação sendo modificado para não conflitar com o principal .swiper-container
var swiper = new Swiper('.swiper-inst', {
//var swiper = new Swiper('.swiper-wrapper-inst', {
//var swiper = new Swiper(".swiper-container-inst", {
//    effect: "coverflow",
//  speed: 1200,

//   autoplay: {
//        delay: 3000
//    },
    loop: true,
    grabCursor: true,
//    Centraliza a posição do slider no centro da tela porem esta afetando a paginacao
//    centeredSlides: true,
    slidesPerView: "auto",
    //Efeito de scroll na horizontal
//    direction: 'horizontal',

//    coverflowEffect: {
//        rotate: 50,
//        stretch: 0,
//        depth: 100,
//        modifier: 1,
//        slideShadows: true,
//    },


//Desativado o type: 'progressbar' acima que esta conflitando com a classe .mySwiper
    pagination: {
//        el: ".swiper-pagination",
        el: '.swiper-pagination-inst',
        clickable: true,
//        desativando a mão
//        grabCursor: false
    },

    //Habilitando o teclado com as setas 
    keyboard: {
//        enabled: true,
        enabled: false,
        onlyInViewport: false
    }

});
