// Добавляем градиентное движение ползунка
// в зависимости от процента ползунка изменяет текст плашки
// Добавляет зависимое от значение ползунка движение индикатора
export default class PortfolioCalculator {
  constructor(config) {
    this.config = config;
    this.rangeSlider = document.querySelector(`.${this.config.RANGE_SLIDER}`);

    this.indicatorProgressLine = document.querySelector(
      `.${this.config.INDICATOR_PROGRESS_LINE}`,
    );
    this.indicatorProgressLineGlow = document.querySelector(
      `.${this.config.INDICATOR_PROGRESS_LINE_GLOW}`,
    );

    this.badgeWrapper = document.querySelector(`.${this.config.BADGE_WRAPPER}`);
    this.badgeText = document.querySelector(`.${this.config.BADGE_TEXT}`);

    this.radioInputs = document.querySelectorAll(`.${this.config.RADIO_INPUT}`);

    this.resultValue = document.querySelector(`.${this.config.RESULT_VALUE}`);

    this.stateMap = [
      {
        name: 'null',
        text: 'Нулевой риск',
        max: 0,
      },
      {
        name: 'low',
        text: 'Низкий риск',
        max: 33,
      },
      {
        name: 'medium',
        text: 'Средний риск',
        max: 66,
      },
      {
        name: 'high',
        text: 'Высокий риск',
        max: 100,
      },
    ];
    this.classesToRemove = {
      line: this.stateMap.map(
        (state) => `${this.config.INDICATOR_PROGRESS_LINE}--${state.name}`,
      ),
      lineGlow: this.stateMap.map(
        (state) => `${this.config.INDICATOR_PROGRESS_LINE_GLOW}--${state.name}`,
      ),
      badgeWrapper: this.stateMap.map(
        (state) => `${this.config.BADGE_WRAPPER}--${state.name}`,
      ),
      rangeSlider: this.stateMap.map(
        (state) => `${this.config.RANGE_SLIDER}--${state.name}`,
      ),
      radioInput: this.stateMap.map(
        (state) => `${this.config.RADIO_INPUT}--${state.name}`,
      ),
    };
    this.currentState = null;

    this.checkValue = this.checkValue.bind(this);
    this.changeState = this.changeState.bind(this);
    this.clearStateClasses = this.clearStateClasses.bind(this);
    this.updateIndicators = this.updateIndicators.bind(this);
    this.UpdateDOM = this.UpdateDOM.bind(this);

    this.initEvents();
  }

  initEvents() {
    if (!this.rangeSlider) return;

    // Первоначально обновляем состояние
    const currentValue = Number(this.rangeSlider.value);
    this.checkValue(currentValue);

    // Подключаем событие
    this.rangeSlider.addEventListener('input', (event) => {
      const currentValue = Number(event.target.value);
      this.checkValue(currentValue);
    });
  }

  checkValue(value) {
    // Обновляем индикаторы, которые напрямую зависят от значения
    this.updateIndicators(value);

    const newState = this.stateMap.find((state) => value <= state.max);

    if (
      this.currentState === null ||
      newState.name !== this.currentState.name
    ) {
      this.changeState(newState);
    }
  }

  changeState(state) {
    this.clearStateClasses();
    this.currentState = state;
    this.UpdateDOM();
  }

  clearStateClasses() {
    if (this.indicatorProgressLine) {
      this.indicatorProgressLine.classList.remove(...this.classesToRemove.line);
    }

    if (this.indicatorProgressLineGlow) {
      this.indicatorProgressLineGlow.classList.remove(
        ...this.classesToRemove.lineGlow,
      );
    }

    if (this.badgeWrapper) {
      this.badgeWrapper.classList.remove(...this.classesToRemove.badgeWrapper);
    }

    if (this.rangeSlider) {
      this.rangeSlider.classList.remove(...this.classesToRemove.rangeSlider);
    }

    this.radioInputs.forEach((label) => {
      if (label) {
        label.classList.remove(...this.classesToRemove.radioInput);
      }
    });
  }

  updateIndicators(value) {
    // Обновляем процент доходности
    if (this.resultValue) {
      this.resultValue.textContent = `${value / 5}%`;
    }
    // Обновляем градиент слайдера
    if (this.rangeSlider) {
      this.rangeSlider.style.background = `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${value}%, #252525 ${value}%, #252525 100%)`;
    }
  }

  UpdateDOM() {
    this.indicatorProgressLine.classList.add(
      `${this.config.INDICATOR_PROGRESS_LINE}--${this.currentState.name}`,
    );
    this.indicatorProgressLineGlow.classList.add(
      `${this.config.INDICATOR_PROGRESS_LINE_GLOW}--${this.currentState.name}`,
    );

    this.badgeWrapper.classList.add(
      `${this.config.BADGE_WRAPPER}--${this.currentState.name}`,
    );
    this.badgeText.textContent = `${this.currentState.text}`;

    this.rangeSlider.classList.add(
      `${this.config.RANGE_SLIDER}--${this.currentState.name}`,
    );
    this.radioInputs.forEach((label) => {
      label.classList.add(
        `${this.config.RADIO_INPUT}--${this.currentState.name}`,
      );
    });
  }
}
