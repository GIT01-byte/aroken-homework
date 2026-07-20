// 1 задание
console.log('1 задание');

const SCKILLS = 'skills';
const PROGRAMMING_SCKILLS = 'programmingSkills';

const person = {
  name: 'Timur',
  lastName: 'Gaisin',
  age: 16,
  skills: {
    programmingSkills: {
      1: 'HTML',
      2: 'CSS',
      3: 'Python',
      4: 'SQLAlchemy',
      5: 'FastAPI',
    },
  },
};

for (let personKey in person) {
  if (personKey === SCKILLS) {
    for (let skillsKey in person[SCKILLS]) {
      if (skillsKey === PROGRAMMING_SCKILLS) {
        for (let programmingSkillKey in person[SCKILLS][skillsKey]) {
          console.log(
            `${programmingSkillKey}: ${person[SCKILLS][skillsKey][programmingSkillKey]}`,
          );
        }
      } else {
        console.log(`${skillsKey}: ${person[SCKILLS][skillsKey]}`);
      }
    }
  } else {
    console.log(`${personKey}: ${person[personKey]}`);
  }
}

console.log('-'.repeat(20));

// 2 задание
console.log('2 задание');

function isEmpty(object) {
  for (let _ in object) {
    return false;
  }
  return true;
}

const emptyObject = {};
const notEmptyObject = {
  status: 'Я не пустой',
};

console.log(isEmpty(emptyObject));
console.log(isEmpty(notEmptyObject));

console.log('-'.repeat(20));

// 3 задание
console.log('3 задание');

const task = {
  title: 'Задача 1',
  description: 'Описание задачи...',
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  const newObject = { ...object, ...modifications };
  return newObject;
}

const modificationsObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

const newObj = cloneAndModify(task, modificationsObject);

for (let objKey in newObj) {
  console.log(`${objKey}: ${newObj[objKey]}`);
}

console.log('-'.repeat(20));

// 4 задание
console.log('4 задание');

function callAllMethods(obj) {
  for (let objKey in obj) {
    if (typeof obj[objKey] === 'function') {
      obj[objKey]();
    } else {
      continue;
    }
  }
}

const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод',
};
callAllMethods(myObject);
