/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  } else if (actual !== expected) {
    console.log("❌❌❌ Assertion Failed:", actual, "!==", expected);
  }
};

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};
// TEST CODE cases

const bestTVShowsByGenre = {
  scifiction: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);