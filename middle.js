/* eslint-disable linebreak-style */
// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
      
    return [array[mid - 1], array[mid]];
  } else {
    return [array[mid]];
  }
};

module.exports = middle;