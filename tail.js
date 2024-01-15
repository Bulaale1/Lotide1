/* eslint-disable linebreak-style */
/* Implementing a tail function. A function that returns all the element of an array except the first element
and returns an empty array if the given arrays are empty or has only one element */
const tail = function(arr) {
  if (arr.length < 2) {
    return [];
  } else {
    return arr.slice(1);
  }
};
module.exports = tail;