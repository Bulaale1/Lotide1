/* eslint-disable linebreak-style */
const tail = require('../tail');
const assertEqual = require('../assertEqual');
// Test Cases:
const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
assertEqual(array[1],result[0]);
const array1 = [10,25,35,45];
const result1 = tail(array1);
assertEqual(array1[1],result1[0]);
assertEqual(result.length, array.length - 1);
assertEqual(result1.length, array1.length - 1);
const oneElement = [8];
const result2 = tail(oneElement);
assertEqual(result2.length,0);
const emptyArray = [];
const result3 = tail(emptyArray);
assertEqual(result3.length,0);