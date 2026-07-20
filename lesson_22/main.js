// 1 задание
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    continue;
  }
  console.log(i);
}

// 2 задание
const number = +prompt('2) Введите число для факториала:', 5);
let result = 1;
for (let i = 1; i <= number; i++) {
  result *= i;
}

console.log(`2 задание - результат вычисления факториала: ${result}`);

// 3 задание
let line = '';
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    line += (i + j) % 2 === 0 ? 'О' : 'Х';
  }

  line += '\n';
}

console.log(line);
