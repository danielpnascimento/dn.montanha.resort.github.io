

var tab = new Swiper('.tab-content-valores', {
    speed: 1200,
    slidesPerView: 1,
//    Desativando para deixar o flex junto com o heigth:100vh; centralizar conforme o tamanho
//    geral da tela
//    autoHeight: true,
    grabCursor: true,

    thumbs: {
        swiper: {
            el: '.tab-menu-valores',
            slidesPerView: 4,
        }

    },
});
