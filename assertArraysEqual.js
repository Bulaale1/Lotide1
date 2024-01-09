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
assertArraysEqual([1, 2, 3], [1, 2, 3]);// should pass;
assertArraysEqual([1, 2, 3], [3, 2, 1]);// should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);//should fail