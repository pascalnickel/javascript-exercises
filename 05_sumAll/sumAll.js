const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  const numbers = [num1, num2];
  const sortedNumbers = numbers.sort((a, b) => a - b);
  let sum = 0;

  for (let i = sortedNumbers[0]; i <= sortedNumbers[1]; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
