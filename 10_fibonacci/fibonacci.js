const fibonacci = function (number) {
  if (number < 0) return "OOPS";

  const fibonacciSeq = [0, 1];

  for (i = 2; i <= number; i++) {
    fibonacciSeq[i] = fibonacciSeq[i - 2] + fibonacciSeq[i - 1];
  }

  return fibonacciSeq[number];
};

// Do not edit below this line
module.exports = fibonacci;
