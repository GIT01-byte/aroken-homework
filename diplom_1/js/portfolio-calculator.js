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

    this.indicatorProgressLineLowGradient = `${this.config.INDICATOR_PROGRESS_LINE_LOW_GRADIENT}`;
    this.indicatorProgressLineMediumGradient = `${this.config.INDICATOR_PROGRESS_LINE_MEDIUM_GRADIENT}`;
    this.indicatorProgressLineHighGradient = `${this.config.INDICATOR_PROGRESS_LINE_HIGH_GRADIENT}`;

    this.badgeWrapper = document.querySelector(`.${this.config.BADGE_WRAPPER}`);
    this.badgeText = document.querySelector(`.${this.config.BADGE_TEXT}`);

    this.indicatorBadgeWrapperLowGradient = `${this.config.INDICATOR_BADGE_WRAPPER_LOW_GRADIENT}`;
    this.indicatorBadgeWrapperMediumGradient = `${this.config.INDICATOR_BADGE_WRAPPER_MEDIUM_GRADIENT}`;
    this.indicatorBadgeWrapperHighGradient = `${this.config.INDICATOR_BADGE_WRAPPER_HIGH_GRADIENT}`;

    this.radioInputs = document.querySelectorAll(
      `.${this.config.RADIO_INPUTs}`,
    );

    this.resultValue = document.querySelector(`.${this.config.RESULT_VALUE}`);

    this.manageRangeSlider();
  }

  manageRangeSlider() {
    if (!this.rangeSlider) return;

    // Первоначально обновляем UI
    const currentValue = Number(this.rangeSlider.value);
    this.UpdateUI(currentValue);

    // Подключаем событием и обновляем UI
    this.rangeSlider.addEventListener('input', (event) => {
      const currentValue = Number(event.target.value);
      this.UpdateUI(currentValue);
    });
  }

  RemoveColors() {
    const lines = [this.indicatorProgressLine, this.indicatorProgressLineGlow];
    lines.forEach((line) => {
      if (line) {
        line.classList.remove(
          this.indicatorProgressLineLowGradient,
          this.indicatorProgressLineMediumGradient,
          this.indicatorProgressLineHighGradient,
        );
      }
    });

    if (this.badgeWrapper) {
      this.badgeWrapper.classList.remove(
        this.indicatorBadgeWrapperLowGradient,
        this.indicatorBadgeWrapperMediumGradient,
        this.indicatorBadgeWrapperHighGradient,
      );
    }

    if (this.rangeSlider) {
      this.rangeSlider.style.removeProperty('--slider-color');
    }

    this.radioInputs.forEach((label) => {
      label.style.removeProperty('--radio-gradient');
    });
  }

  UpdateUI(value) {
    this.RemoveColors();

    if (this.resultValue) {
      this.resultValue.textContent = `${value / 5}%`;
    }

    if (this.rangeSlider) {
      this.rangeSlider.style.background = `linear-gradient(to right, var(--slider-color) 0%, var(--slider-color) ${value}%, #252525 ${value}%, #252525 100%)`;
    }

    if (value === 0) {
      this.badgeText.textContent = 'Нулевой риск';

      this.rangeSlider.style.setProperty('--slider-color', '#6f7e8c');
      this.radioInputs.forEach((label) => {
        label.style.setProperty(
          '--radio-gradient',
          'linear-gradient(#0e0e12, #0e0e12), linear-gradient(133deg, #6f7e8c 0%, #405548 100%)',
        );
      });
    } else if (value > 0 && value <= 33) {
      this.indicatorProgressLine.classList.add(
        this.indicatorProgressLineLowGradient,
      );
      this.indicatorProgressLineGlow.classList.add(
        this.indicatorProgressLineLowGradient,
      );

      this.badgeWrapper.classList.add(this.indicatorBadgeWrapperLowGradient);
      this.badgeText.textContent = 'Низкий риск';

      this.rangeSlider.style.setProperty('--slider-color', '#61BB75');
      this.radioInputs.forEach((label) => {
        label.style.setProperty(
          '--radio-gradient',
          'linear-gradient(#0e0e12, #0e0e12), linear-gradient(133deg, #41594a 0%, #6adb83 100%)',
        );
      });
    } else if (value > 33 && value <= 66) {
      this.indicatorProgressLine.classList.add(
        this.indicatorProgressLineMediumGradient,
      );
      this.indicatorProgressLineGlow.classList.add(
        this.indicatorProgressLineMediumGradient,
      );

      this.badgeWrapper.classList.add(this.indicatorBadgeWrapperMediumGradient);
      this.badgeText.textContent = 'Средний риск';

      this.rangeSlider.style.setProperty('--slider-color', '#dcd06a');
      this.radioInputs.forEach((label) => {
        label.style.setProperty(
          '--radio-gradient',
          'linear-gradient(#0e0e12, #0e0e12), linear-gradient(133deg, #555140 0%, #dcd06a 100%)',
        );
      });
    } else if (value > 66 && value <= 100) {
      this.indicatorProgressLine.classList.add(
        this.indicatorProgressLineHighGradient,
      );
      this.indicatorProgressLineGlow.classList.add(
        this.indicatorProgressLineHighGradient,
      );

      this.badgeWrapper.classList.add(this.indicatorBadgeWrapperHighGradient);
      this.badgeText.textContent = 'Высокий риск';

      this.rangeSlider.style.setProperty('--slider-color', '#db6a6a');
      this.radioInputs.forEach((label) => {
        label.style.setProperty(
          '--radio-gradient',
          'linear-gradient(#0e0e12, #0e0e12), linear-gradient(133deg, #554040 0%, #db6a6a 100%)',
        );
      });
    } else {
      console.log(`Неверное значение ${value}`);
      this.RemoveColors();
      this.badgeText.textContent = 'Неверное значение';
    }
  }
}
