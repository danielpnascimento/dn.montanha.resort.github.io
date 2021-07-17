


var swiper = new Swiper('.container-slider-lazer', {
    spaceBetween: 30,
    effect: 'fade',
//      loop: true,
    grabCursor: true,
    loop: false,
//    Desativado o mouse
//    mousewheel: {
//        invert: false,
//    },
    // autoHeight: true,
    pagination: {
//        el: '.blog-slider__pagination',
        el: '.swiper-pagination-lazer',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-lazer',
        prevEl: '.swiper-button-prev-lazer',
    }
});
