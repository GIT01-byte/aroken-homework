// import HeaderFixed from "./header.js";
import BurgerMenu from './burger.js';
import CountdownTimer from './timer.js';
import PortfolioCalculator from './portfolio-calculator.js';
import IMask from '../node_modules/imask/esm/index.js';
// import Modal from "./modal.js";
import { casesSlider } from './cases-slider.js';
// import { sizes } from "./sizes.js";

try {
  // const headerFixed = new HeaderFixed({
  //   HEADER: "header",
  //   HEADER_FIXED: "header--fixed",
  // });

  new BurgerMenu(
    {
      BURGER: 'burger',
      BURGER_OPEN: 'burger--open',
      HEADER_MENU: 'header__menu',
      HEADER_MENU_OPEN: 'header__menu--open',
      lABEL: {
        OPEN: 'Открыть меню',
        CLOSE: 'Закрыть меню',
      },
      PAGE_BODY: 'page__body',
      PAGE_BODY_NO_SCROLL: 'page__body--no-scroll',
      MENU_LINK: 'menu__link',
      BREAKPOINT: 1120,
      MAIN: 'main',
    },
    // headerFixed,
  );

  new CountdownTimer({
    DAY: 'timer__day',
    HRS: 'timer__hrs',
    MIN: 'timer__min',
    SEC: 'timer__sec',
    FINISH_DATE: '1 Sep 2026 00:00:00',
  });

  new PortfolioCalculator({
    RANGE_SLIDER: 'calculator__range-slider',
    INDICATOR_PROGRESS_LINE: 'indicator-progress-line',
    INDICATOR_PROGRESS_LINE_GLOW: 'indicator-progress-line-glow',
    INDICATOR_PROGRESS_LINE_LOW_GRADIENT: 'indicator-progress-line--low',
    INDICATOR_PROGRESS_LINE_MEDIUM_GRADIENT: 'indicator-progress-line--medium',
    INDICATOR_PROGRESS_LINE_HIGH_GRADIENT: 'indicator-progress-line--high',
    BADGE_WRAPPER: 'calculator__indicator-badge-wrapper',
    BADGE_TEXT: 'calculator__indicator-badge',
    INDICATOR_BADGE_WRAPPER_LOW_GRADIENT:
      'calculator__indicator-badge-wrapper--low',
    INDICATOR_BADGE_WRAPPER_MEDIUM_GRADIENT:
      'calculator__indicator-badge-wrapper--medium',
    INDICATOR_BADGE_WRAPPER_HIGH_GRADIENT:
      'calculator__indicator-badge-wrapper--high',
    RADIO_INPUTs: 'calculator__radio-checkbox',
    RESULT_VALUE: 'calculator__indicator-result-value',
  });

  // new Modal ({
  //   PAGE_BODY: "page__body",
  //   PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  // })

  casesSlider();
  // sizes();

  // Маска для инпута телефона
  var phoneInput = document.getElementById('bid-phone-input');
  var phoneMask = IMask(phoneInput, {
    mask: '+{7} 000 000 00 00',
    lazy: false,
    placeholderChar: '-',
  });
} catch (error) {
  console.error(error);
}
