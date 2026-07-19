// 1 задание
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}

// 2 задание
const number = +prompt('2) Введите число для факториала:');
let result = 1;
for (let i = 1; i <= number; i++) {
  if (number <= 1) {
    result = 1;
    break;
  }
  result *= i;
}

console.log(`2 задание - результат вычисления факториала: ${result}`);

// 3 задание
let line = '';
for (let i = 0; i <= 8; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j <= 8; j++) {
      if (j % 2 == 0) {
        line += 'Б';
      } else {
        line += 'Ч';
      }
    }
  } else {
    for (let j = 0; j <= 8; j++) {
      if (j % 2 == 0) {
        line += 'Ч';
      } else {
        line += 'Б';
      }
    }
  }

  line += '\n';
}

console.log(line);
