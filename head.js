/* eslint-disable linebreak-style */
const assertEqual = require('./assertEqual');
const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};
module.exports = head;
