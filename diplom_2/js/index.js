import BurgerMenu from './burger.js';
import CountdownTimer from './timer.js';
import PortfolioCalculator from './portfolio-calculator.js';
import IMask from '../node_modules/imask/esm/index.js';
import { casesSlider } from './cases-slider.js';
// import Modal from "./modal.js";

try {
  new BurgerMenu({
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
  });

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
    BADGE_WRAPPER: 'calculator__indicator-badge-wrapper',
    BADGE_TEXT: 'calculator__indicator-badge',
    RADIO_INPUT: 'calculator__radio-checkbox',
    RESULT_VALUE: 'calculator__indicator-result-value',
  });

  // new Modal ({
  //   PAGE_BODY: "page__body",
  //   PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  // })

  casesSlider();

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
