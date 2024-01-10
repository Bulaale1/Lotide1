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
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const middle = function(array) {
  if (array.length === 0) {
    return [];
  } else if (array.length < 3) {
    return [];
  } else {
    const mid = Math.round(array.length / 2);
    if (array.length % 2 === 0) {
      
      return [array[mid - 1], array[mid]];
    } else {
      return [array[mid - 1]];
    }

  }

};

// TEST CODE
// ...
console.log(middle([1])); // => []
console.log(middle([1, 2]));// => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3, 4]),[3,4]);