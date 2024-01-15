/* eslint-disable linebreak-style */
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]),[]);
// Test case: An array with two elements should return an empty array
assertArraysEqual(middle([1, 2]),[]);
// rest of your code
// Test case: An array with one element should return an empty array since there is no middle element
assertArraysEqual(middle([1]),[]);
// Test case: An array with two element should return an empty array since there is no middle element
assertArraysEqual(middle([1, 2]),[]);
// Test case: An even array with more than 2 element should return the two middle element
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
// Test case: An odd array with more than 2 element should return the  middle element
assertArraysEqual(middle([1, 2, 3]),[2]);