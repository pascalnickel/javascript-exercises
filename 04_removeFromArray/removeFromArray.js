const removeFromArray = function (values, ...removers) {
  return values.filter((value) => !removers.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
