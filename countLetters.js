/* eslint-disable linebreak-style */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(sentence) {
  let object = {};
  for (let letter of sentence) {
    if (letter !== ' ') {
      if (!object[letter]) {
        object[letter] = 1;
      } else {
        object[letter] += 1;
      }
    }
  }
  return object;
};
let sentence = "lighthouse in the house";
console.log(sentence);
let countedLetters = countLetters(sentence);
assertEqual(countedLetters['e'],2);
assertEqual(countedLetters['h'],4);
assertEqual(countedLetters['i'],2);