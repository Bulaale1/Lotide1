/* eslint-disable linebreak-style */
const countOnly = function(allItems, itemToCount) {
  let count = 0;
  let countObject = {};
  for (let item in itemToCount) {
    if (itemToCount[item] === true) {
      for (let index = 0; index < allItems.length; index++) {
        if (allItems[index] === item) {
          count++;
        }
      }
      if (count > 0) {
        let Name = item;
        countObject[Name] = count;
        count = 0;
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
assertEqual(result1["Salima"], 2);