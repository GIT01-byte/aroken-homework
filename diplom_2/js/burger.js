export default class BurgerMenu {
  constructor(config) {
    this.config = config;
    this.burgerMenu = document.querySelector(`.${this.config.BURGER}`);
    this.burgerMenuOpen = `${this.config.BURGER_OPEN}`;

    this.headerMenu = document.querySelector(`.${this.config.HEADER_MENU}`);
    this.headerMenuOpen = `${this.config.HEADER_MENU_OPEN}`;

    this.labelOpen = `${this.config.lABEL.OPEN}`;
    this.labelClose = `${this.config.lABEL.CLOSE}`;

    this.pageBody = document.querySelector(`.${this.config.PAGE_BODY}`);
    this.pageBodyNoScroll = `${this.config.PAGE_BODY_NO_SCROLL}`;

    this.breakpoint = `${this.config.BREAKPOINT}`;

    this.onBodyClick = this.onBodyClick.bind(this);
    this.onBurgerClick = this.onBurgerClick.bind(this);

    this.initEvents();
  }

  initEvents() {
    this.burgerMenu.addEventListener('click', this.onBurgerClick);
    this.pageBody.addEventListener('click', this.onBodyClick);
  }

  onBurgerClick() {
    const isOpen = this.burgerMenu.classList.toggle(this.burgerMenuOpen);

    this.burgerMenu.ariaLabel = isOpen
      ? ((this.burgerMenu.ariaLabel = this.labelClose),
        (this.burgerMenu.ariaExpanded = true))
      : ((this.burgerMenu.ariaLabel = this.labelOpen),
        (this.burgerMenu.ariaExpanded = false));

    this.pageBody.classList.toggle(this.pageBodyNoScroll, isOpen);

    this.headerMenu.classList.toggle(this.headerMenuOpen, isOpen);
  }

  hideBurgerMenu() {
    this.burgerMenu.classList.remove(this.burgerMenuOpen);

    this.burgerMenu.ariaLabel = this.labelOpen;
    this.burgerMenu.ariaExpanded = false;

    this.pageBody.classList.remove(this.pageBodyNoScroll);

    this.headerMenu.classList.remove(this.headerMenuOpen);
  }

  isBurgerOpen() {
    return this.burgerMenu.classList.contains(this.config.BURGER_OPEN);
  }

  onBodyClick(event) {
    const target = event.target;
    const isLinkInMenu = target.classList.contains(this.config.MENU_LINK);
    const isBurgerMenuOpen = this.isBurgerOpen();
    const isClickOutsideMenu =
      !target.closest(`.${this.config.HEADER_MENU}`) &&
      !target.closest(`.${this.config.BURGER}`);

    if (
      (isLinkInMenu && window.innerWidth <= this.config.BREAKPOINT) ||
      (isBurgerMenuOpen && isClickOutsideMenu)
    ) {
      this.hideBurgerMenu();
    }
  }
}
