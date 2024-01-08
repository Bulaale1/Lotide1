/* eslint-disable linebreak-style */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = function(arr) {
  return arr[0];
};
assertEqual(head([4,5,6]),4);
assertEqual(head([4,5,6]),6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),0);