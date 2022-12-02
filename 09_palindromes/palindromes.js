const palindromes = function (string) {
  const trimmedString = string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replaceAll(" ", "")
    .toLowerCase();

  const reverseString = trimmedString.split("").reverse().join("");

  return trimmedString === reverseString;
};

palindromes("Das ist mein,,,, test$ Satz!!.");
// Do not edit below this line
module.exports = palindromes;
