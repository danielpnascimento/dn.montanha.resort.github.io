// Params
let mainSliderSelector = '.main-slider',
        navSliderSelector = '.nav-slider',
        interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
    loop: true,
    speed: 1300,
//    autoplay: {
//        delay: 3000
//    },
//    loopAdditionalSlides: 10,
    loopAdditionalSlides: 20,
    grabCursor: true,
//    Faz a troca da img pelo meio da tela
//    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next-culi',
        prevEl: '.swiper-button-prev-culi',
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('nav-lateral');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                    captions = swiper.el.querySelectorAll('.subtitle-culi');
            for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
            }
            swiper.slides[swiper.activeIndex].querySelector('.subtitle-culi').classList.add('show');
        },
        progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                        innerOffset = swiper.width * interleaveOffset,
                        innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-bg-culi").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },
        touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bg-culi").style.transition =
                        speed + "ms";
            }
        }
    }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

// Navigation Slider
let navSliderOptions = {
    loop: true,
//    loopAdditionalSlides: 10,
    loopAdditionalSlides: 20,
    speed: 1200,
    spaceBetween: 5,
    slidesPerView: 5,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    on: {
        imagesReady: function () {
            this.el.classList.remove('nav-lateral');
        },
        click: function () {
            mainSlider.autoplay.stop();
        }
    }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);

// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
