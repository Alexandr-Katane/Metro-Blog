//const swiperMin = require("./libs/swiper.min");

////Заготовка
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];

        /////////////////////////////////////////////////////////////////
        //ЧТоб не добалять каждому слайдеру класс swiper-container
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }
        /////////////////////////////////////////////////////////////////

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }




if (document.querySelector('.slider-content__body')) {
    let mainSlider = new Swiper('.slider-content__body', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        preloadImages: false,
        parallax: true,
        //Dotts
        navigation: {
            nextEl: '.slider-arrow_next',
            prevEl: '.slider-arrow_prev',
        },
    });
}



