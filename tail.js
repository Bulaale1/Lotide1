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
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
const result1 = tail([10,25,35,45]);
console.log(result1);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);