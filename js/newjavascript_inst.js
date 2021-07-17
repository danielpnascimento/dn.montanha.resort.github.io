

var swiper = new Swiper('.swiper-inst', {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto", pagination: {
        el: '.swiper-pagination-inst',
        clickable: true
    },

    keyboard: {
        enabled: false,
        onlyInViewport: false
    }

});
