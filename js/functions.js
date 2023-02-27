//Функция для проверки длины строки

const checkLength = (string, maxLength) => string.length < maxLength;

// Строка является палиндромом

const isPalindrome = (string) => {
  const stringTransformed = string.toLowerCase().replaceAll(' ','');
  let reverseWord = '';
  for (let i = stringTransformed.length - 1; i >= 0; i--) {
    reverseWord += stringTransformed[i];
  }
  return reverseWord === stringTransformed;
};

// Функция для извлечения цифр из строки.

const extractInteger = (number) => {
  const onlyNumbers = String(number).replaceAll(/[^0-9]/g,'');
  const result = parseInt(onlyNumbers, 10);
  return result;
};

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

