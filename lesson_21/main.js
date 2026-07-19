// // 1 задание
// const number = +prompt('1) Введите число:', 0);

// if (isNaN(number)) {
//   console.log('1 задание: разрешены только числа');
// } else if (number % 2 == 0) {
//   console.log(`Число ${number} четное`);
// } else if (number % 2 != 0) {
//   console.log(`Число ${number} не четное`);
// } else {
//   console.log(
//     '1 задание: расчет четности/нечетности числа - неизвестная ашибка',
//   );
// }

// // 2 задание
// let age = +prompt('2) Введите возраст:', 0);

// // let discount =
// //   age < 18
// //     ? '10%'
// //     : age >= 18 && age <= 65
// //       ? '20%'
// //       : age > 65
// //         ? '30%'
// //         : '2 задание: неизвестная ашибка';

// let discount;
// switch (true) {
//   case age < 18:
//     discount = '10%';
//     break;
//   case age >= 18 && age <= 65:
//     discount = '20%';
//     break;
//   case age > 65:
//     discount = '30%';
//     break;
//   default:
//     discount = '2 задание: расчет скидки по возрасту - неизвестная ашибка';
// }

// console.log(`Скидка для вашего возраста: ${age} составляет - ${discount}`);

// // 3 задание
// const ADMIN_LOGIN = 'admin';
// const USER_LOGIN = 'user';
// const VALID_PASSWORD = 123456;

// const username = prompt('3) Введите логин:', 0);
// const password = prompt('3) Введите пароль:', 0);

// let access;
// if (
//   (username == ADMIN_LOGIN || username == USER_LOGIN) &&
//   password == VALID_PASSWORD
// ) {
//   access = 'Доступ разрешен';
// } else {
//   access = 'Доступ запрещён';
// }

// console.log(access);

// 4 задание
const DELIVERY_TYPE_STANDARD = 'standard';
const DELIVERY_TYPE_EXPRESS = 'express';
const DELIVERY_TYPE_PREMIUM = 'premium';

const weight = +prompt('4) Введите вес посылки', 0);
const delivery_type = prompt('4) Введите тип доставки');

let base_cost;
if (isNaN(weight) || weight <= 0) {
  console.log('4 задание: Некорректный вес посылки');
} else {
  if (weight > 0 && weight < 1) {
    base_cost = 5;
  } else if (weight >= 1 && weight <= 5) {
    base_cost = 10;
  } else if (weight > 5) {
    base_cost = 15;
  } else {
    console.log('4 задание: расчет стоимости доставки -  неизвестная ашибка');
  }
}

let delivery_type_coefficient;
switch (delivery_type) {
  case DELIVERY_TYPE_STANDARD:
    delivery_type_coefficient = 1;
    break;
  case DELIVERY_TYPE_EXPRESS:
    delivery_type_coefficient = 1.5;
    break;
  case DELIVERY_TYPE_PREMIUM:
    delivery_type_coefficient = 2;
    break;
  default:
    console.log('4 задание: Неверный тип доставки');
}

let cost = base_cost * delivery_type_coefficient;
if (isNaN(cost)) {
  console.log(`Результат стоимости доставки: ${cost} не число`);
} else {
  alert(`Итоговая стоимость доставки: ${cost}$`);
}
