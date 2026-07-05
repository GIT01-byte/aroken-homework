export const casesSlider = () => {
  new Swiper('.cases__companies-slider', {
    // 1. Основные настройки для галереи
    slidesPerView: 'auto',
    centeredSlides: true,
    freeMode: false,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // 2. Навигация и взаимодействие
    direction: 'horizontal',
    watchOverflow: false,
    grabCursor: true,
    navigation: {
      prevEl: '.cases__slider-button--prev',
      nextEl: '.cases__slider-button--next',
    },
    spaceBetween: 80, // fallback
    breakpoints: {
      // mobile small
      0: { spaceBetween: 16 },
      375: { spaceBetween: 16 },
      640: { spaceBetween: 28 },
      768: { spaceBetween: 40 },

      // desktop
      769: { spaceBetween: 80 },
      1024: { spaceBetween: 100 },
      1440: { spaceBetween: 120 },
      1920: { spaceBetween: 142 },
    },
  });
};
