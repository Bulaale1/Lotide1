/* eslint-disable linebreak-style */
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');
//Test cases
console.log(eqArrays([1, 2, 3], [1, 2, 3]));// => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]));// => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);//should pass
assertEqual(eqArrays([1, 2, 3], [5,6,7]), true); //should fail