// Утилита общего назначения для получения случайного целого из диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

export {getRandomPositiveInteger};

// Утилита общего назначения для получения случайного числа с заданной точностью из диапапзона
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return parseFloat(result.toFixed(digits));
};

export {getRandomPositiveFloat};

// Утилита общего назначения для получения случайного элемента массива
const getRandomItem = (arr) => arr[getRandomPositiveInteger(0, arr.length - 1)];

export {getRandomItem};

// Утилита общего назначения для получения случайного фрагмента массива
const getRandomArrayPart = (arr) => {
  const lastIndex = arr.length - 1;
  const a = getRandomPositiveInteger(0, lastIndex);
  const b = getRandomPositiveInteger(0, lastIndex);
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return arr.slice(lower, upper);
};

export {getRandomArrayPart};

// Утилита общего назначения для вывода числа с ведущим нулём
const getNumberWithLeadZero = (number) => number < 10 ? `0${number}` : number;


export {getNumberWithLeadZero};
