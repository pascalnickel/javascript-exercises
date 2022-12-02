const add = function (...numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
};

const subtract = function (...numbers) {
  let sum = numbers[0];
  numbers.forEach((number, index) => {
    if (index != 0) sum -= number;
  });
  return sum;
};

const sum = function (numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
};

const multiply = function (numbers) {
  let product = 1;
  numbers.forEach((number) => (product *= number));
  return product;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (number) {
  let product = 1;
  for (let i = number; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
