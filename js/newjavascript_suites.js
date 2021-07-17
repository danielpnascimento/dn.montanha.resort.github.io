var tab = new Swiper('.tab-content', {
    speed: 1200,
    slidesPerView: 1,
//    Desativando para deixar o flex junto com o heigth:100vh; centralizar conforme o tamanho
//    geral da tela
//    autoHeight: true,
    grabCursor: true,
//     autoplay: {
//        delay: 3000
//    },

    thumbs: {
        swiper: {
            el: '.tab-menu',
            slidesPerView: 6
        }

    }
});
