/* eslint-disable linebreak-style */
const eqArrays = function(arr1, arr2) {
  let countMatchedElements = 0;
  if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        countMatchedElements += 1;
      }
    }
    if (countMatchedElements ===  arr1.length) {
      return true;
    } else {
      return false;
    }
  }
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${[arr1]} === ${[arr2]}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const words = ["ground", "control", "to", "major", "tom"];
let result = map((words),function(item) {
  return item;
});
assertArraysEqual(words,result);