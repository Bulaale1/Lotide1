/* eslint-disable linebreak-style */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  } else if (actual !== expected) {
    console.log("❌❌❌ Assertion Failed:", actual, "!==", expected);
  }
};
const findKey = function(object,callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
const object = {"Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }};
let key = findKey(object, x=>x.stars >= 1);
assertEqual(key,'Akaleri');
assertEqual(key,'Blue Hill');