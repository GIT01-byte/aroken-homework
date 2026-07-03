// import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import CountdownTimer from "./timer.js";
// import Modal from "./modal.js";
// import { sizesSlider } from "./product-slider.js";
// import { sizes } from "./sizes.js";

try {
  // const headerFixed = new HeaderFixed({
  //   HEADER: "header",
  //   HEADER_FIXED: "header--fixed",
  // });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 1120,
      MAIN: "main",
    },
    // headerFixed,
  );

  new CountdownTimer({
    DAY: "timer__day",
    HRS: "timer__hrs",
    MIN: "timer__min",
    SEC: "timer__sec",
    FINISH_DATE: "1 Sep 2026 00:00:00",
  });

  // new Modal ({
  //   PAGE_BODY: "page__body",
  //   PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  // })

  // sizesSlider();
  // sizes();
} catch (error) {
  console.error(error);
}
