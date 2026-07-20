// 1 задание
/**
 * Вычисляет скидку, затем прибавляет налог и возвращает итоговое значение
 * @param {number} basePrice - базовая цена товара.
 * @param {number} discount - Процент скидки.
 * @param {number} taxRate -Налоговая ставка (в долях единицы).
 * @returns {number} Итоговая цена товара
 */
const calculateFinalPrice = (basePrice, discount, taxRate) => {
  let discountAmount = basePrice * (discount / 100);
  let priceAfterDiscount = basePrice - discountAmount;
  let taxAmount = priceAfterDiscount * taxRate;

  return priceAfterDiscount + taxAmount;
};

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));

// 2 задание
const VALID_LOGIN = 'admin';
const VALID_PASSWORD = '123456';
/**
 * Сравнивает логин и пароль, и выдает "доступ разрешен" или "доступ запрещен"
 * @param {string} login - Логин пользователя.
 * @param {string} password - Пароль пользователя.
 * @returns {string} Статус доступа
 */
const checkAccess = (login, password) => {
  if (login === VALID_LOGIN && password === VALID_PASSWORD) {
    return 'Доступ разрешен';
  }
  return 'Доступ запрещен';
};

console.log(checkAccess('Вася', '1234'));
console.log(checkAccess('admin', '123456'));

// 3 задание
const nightTimeStart = 0;
const nightTimeEnd = 5;

const morningTimeStart = 6;
const morningTimeEnd = 11;

const dayTimeStart = 12;
const dayTimeEnd = 17;

const eveningTimeStart = 18;
const eveningTimeEnd = 23;
/**
 * Принимает текущее время и возвращает какая сейчас часть дня
 * @param {number} currentTime - Текущее время (число от 0 до 23).
 * @returns {string} Часть дня
 */
const getTimeOfDay = (currentTime) => {
  if (currentTime >= nightTimeStart && currentTime <= nightTimeEnd) {
    return 'Ночь';
  } else if (currentTime >= morningTimeStart && currentTime <= morningTimeEnd) {
    return 'Утро';
  } else if (currentTime >= dayTimeStart && currentTime <= dayTimeEnd) {
    return 'День';
  } else if (currentTime >= eveningTimeStart && currentTime <= eveningTimeEnd) {
    return 'Вечер';
  } else {
    return 'Некорректное время';
  }
};

console.log(getTimeOfDay(15));
console.log(getTimeOfDay(3));
console.log(getTimeOfDay(7));
console.log(getTimeOfDay(18));
console.log(getTimeOfDay(-1));
console.log(getTimeOfDay(24));

// 4 задание
/**
 * Принимает 2 числа start и end и находит первое четное число в указанном диапазоне
 * @param {number} start - Начало диапазона.
 * @param {number} end - Конец диапазона.
 * @returns {number|string} Первое четное число в указанном диапазоне иначе 'Чётных чисел нет'
 */
const findFirstEven = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return 'Чётных чисел нет';
};

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 10));
console.log(findFirstEven(9, 9));
