const reverseString = function (string) {
  const reverseArray = [];

  for (i = string.length - 1; i >= 0; i--) {
    reverseArray.push(string.charAt(i));
  }

  return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
