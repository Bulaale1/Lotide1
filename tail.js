/* eslint-disable linebreak-style */
/* Implementing a tail function. A function that returns all the element of an array except the first element
and returns an empty array if the given arrays are empty or has only one element */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(arr) {
  if (arr.length < 2) {
    return [];
  } else {
    return arr.slice(1);
  }
};
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

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);