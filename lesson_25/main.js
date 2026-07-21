'use strict';

// 1 задание
console.log('1 задание');

const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
];

const usersToAdd = [
  { name: 'Ann', age: 19, isAdmin: false },
  { name: 'Jack', age: 43, isAdmin: true },
];

usersToAdd.forEach((user) => {
  users.push(user);
});

console.log(users);

// 2 задание
console.log('2 задание');

function getUserAverageAge(users) {
  let ageSum = 0;
  users.forEach((user) => {
    ageSum += user.age;
  });

  let avgAgeSum = ageSum / users.length;
  return avgAgeSum;
}

let avgAgeSum = getUserAverageAge(users);
console.log(avgAgeSum);

// 3 задание
console.log('3 задание');

function getAllAdmins(users) {
  let usersAllAdmins = [];
  users.forEach((user) => {
    if (user.isAdmin === true) {
      usersAllAdmins.push(user);
    }
  });

  return usersAllAdmins;
}

let usersAllAdmins = getAllAdmins(users);
console.log(usersAllAdmins);

// 4 задание
console.log('4 задание');

function first(arr, n) {
  let newArr = [];

  if (typeof n === 'undefined') {
    newArr.push(arr.at(0));
  } else {
    for (let i = 0; i < n && i < arr.length; i++) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const letters = ['a', 'b', 'c', 'd'];
console.log(first(letters, 2));
console.log(first(letters));
console.log(first(letters, 5));
