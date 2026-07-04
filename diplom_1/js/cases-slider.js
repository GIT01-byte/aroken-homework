export const casesSlider = () => {
  new Swiper('.product__slider', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 0,
    freeMode: true,
    watchOverflow: true,
    grabCursor: true,
    centeredSlides: false,
    slideToClickedSlide: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: '.cases__slider-button--prev',
      nextEl: '.cases__slider-button--next',
    },
  });
};
