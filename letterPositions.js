/* eslint-disable linebreak-style */
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter].push(index);
      }
    }
  }
  return results;
};
let result = letterPositions("Hello world lol");
console.log(result);
assertArraysEqual(result['l'],[ 2, 3, 9, 12, 14 ]);
assertArraysEqual(result['e'],[ 1,]);
assertArraysEqual(result['o'],[ 4, 7, 13 ]);
assertArraysEqual(result['o'],[ 4, 7, 13,12 ]);