const caesar = function (string, shift) {
  const adjShift = shift % 26;

  const chars = string.split("");
  const charCodes = chars.map((char) => char.charCodeAt(0));

  const shiftedCharCodes = charCodes.map((code) => {
    let newCode = code;

    if (newCode >= 65 && newCode <= 90) {
      newCode += adjShift;
      return newCode < 65
        ? newCode + 26
        : newCode > 90
        ? newCode - 26
        : newCode;
    } else if (newCode >= 97 && newCode <= 122) {
      newCode += adjShift;
      return newCode < 97
        ? newCode + 26
        : newCode > 122
        ? newCode - 26
        : newCode;
    } else {
      return newCode;
    }
  });

  return String.fromCharCode(...shiftedCharCodes);
};
// Do not edit below this line
module.exports = caesar;
