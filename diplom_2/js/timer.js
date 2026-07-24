// Считате сколько времени прошло от 1 июля 2026 года GMT+3 до 1 сентября 2026 года (60 дней)
// Когда таймер дойдет до нуля стили таймера обновлятся (красный цвет и прочее) и время покажет нулевым
// Скрипт делал по гайду: https://youtu.be/vVxKtBYNZIo
export default class CountdownTimer {
  constructor(config) {
    this.config = config;
    this.day = document.querySelector(`.${this.config.DAY}`);
    this.hrs = document.querySelector(`.${this.config.HRS}`);
    this.min = document.querySelector(`.${this.config.MIN}`);
    this.sec = document.querySelector(`.${this.config.SEC}`);

    this.finishDate = new Date(`${this.config.FINISH_DATE}`);

    setInterval(this.countdownTimer.bind(this), 1000);
  }

  countdownTimer() {
    const todayDate = Date.now();
    const gap = this.finishDate - todayDate;

    if (gap <= 0) {
      this.clearTimer();
    }

    const d = Math.floor(gap / 1000 / 60 / 60 / 24);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

    this.day.innerHTML = d < 10 ? '0' + d : d;
    this.hrs.innerHTML = h < 10 ? '0' + h : h;
    this.min.innerHTML = m < 10 ? '0' + m : m;
    this.sec.innerHTML = s < 10 ? '0' + s : s;
  }

  clearTimer() {
    this.day.innerHTML = '00';
    this.hrs.innerHTML = '00';
    this.min.innerHTML = '00';
    this.sec.innerHTML = '00';

    return;
  }
}
