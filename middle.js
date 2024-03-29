/* eslint-disable linebreak-style */
const middle = function(array) {
  if (array.length < 3 || array.length === undefined) {
    return [];
  }
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[mid - 1], array[mid]];
  }
  return [array[mid]];
};

module.exports = middle;