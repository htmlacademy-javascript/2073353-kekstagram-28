//Функция для проверки длины строки

const checkLength = (string, maxLength) => string.length < maxLength;

console.log('Проверки функции 1');
// Cтрока короче 20 символов
console.log('проверяемая строка', 20, checkLength('проверяемая строка', 20));
// Длина строки ровно 18 символов
console.log('проверяемая строка', 18, checkLength('проверяемая строка', 18));
// Строка длиннее 10 символов
console.log('проверяемая строка', 10, checkLength('проверяемая строка', 10));


// Строка является палиндромом

const isPalindrome = (string) => {
  const stringTransformed = string.toLowerCase().replaceAll(' ','');
  let reverseWord = '';
  for (let i = stringTransformed.length - 1; i >= 0; i--) {
    reverseWord += stringTransformed[i];
  }
  return reverseWord === stringTransformed;
};


console.log('Проверки функции 2');
// Проверка 1
console.log('топот', isPalindrome('топот'));
// Проверка 2
console.log('ДовОд', isPalindrome('ДовОд'));
// Проверка 3
console.log('Кекс', isPalindrome('Кекс'));
// Проверка 4
console.log('Лёша на полке клопа нашёл ', isPalindrome('Лёша на полке клопа нашёл '));

// Функция для извлечения цифр из строки.

const extractInteger = (number) => {
  const onlyNumbers = String(number).replaceAll(/[^0-9]/g,'');
  const result = parseInt(onlyNumbers, 10);
  return result;
};


console.log('Проверки функции 3');
// Проверка 1
console.log('1 кефир, 0.5 батона', extractInteger('1 кефир, 0.5 батона'));
// Проверка 2
console.log('агент 007', extractInteger('агент 007'));
// Проверка 3
console.log('а я томат', extractInteger('а я томат'));
// Проверка 4
console.log('-1', extractInteger('-1'));
// Проверка 4
console.log(1.5, extractInteger(1.5));

//Функция добавления символов перед строкой для увеличения ее до заданного объема.

const fillBefore = (string, length, filler) => {
  let resultString = '';
  const remainingLength = length - string.length;
  let i = 0;
  let currentLength = 0;
  const fillerLength = filler.length;
  while (currentLength < remainingLength) {
    if (i === fillerLength) {
      i = 0;
    }
    resultString += filler[i];
    i++;
    currentLength++;
  }
  return resultString + string;
};

console.log('Проверки функции 4');
// Проверка 1
console.log('1', 2, '0', fillBefore('1', 2, '0'));

// Добавочный символ использован три раза
console.log('1', 4, '0', fillBefore('1', 4, '0')); // '0001'

// Добавочные символы обрезаны с конца
console.log('q', 4, 'werty', fillBefore('q', 4, 'werty')); // 'werq'

// Добавочные символы использованы полтора раза
console.log('q', 4, 'we', fillBefore('q', 4, 'we')); // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
console.log('qwerty', 4, '0', fillBefore('qwerty', 4, '0'));
