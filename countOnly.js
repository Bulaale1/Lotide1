/* eslint-disable linebreak-style */
const countOnly = function(allItems, itemsToCount) {
  let countObject = {};
  for (let index = 0; index < allItems.length; index++) {
    let item = allItems[index];
    if (itemsToCount[item]) {
      if (countObject[item]) {
        countObject[item] += 1;
      } else {
        countObject[item] = 1;
      }
    }
  }
  return countObject;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed:"${actual} !== ${expected}`);
  }
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Karima"], undefined);