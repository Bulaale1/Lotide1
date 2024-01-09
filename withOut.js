/* eslint-disable eqeqeq */
// eslint-disable-next-line linebreak-style
/* eslint-disable space-infix-ops */
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
const without = function(items, unwantedItems) {
  let onlyWantedItems = [];
  for (let i = 0; i < items.length; i++) {
    let found = false;
    for (let j = 0; j < unwantedItems.length; j++) {
      if (items[i] === unwantedItems[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      onlyWantedItems.push(items[i]);
    }
  }
  return onlyWantedItems;
};
const result1 = without([1, 2, 3], [1]); // => [2, 3];
let result2 = without(["1", "2", "3"], [1, 2, "3"]);// => ["1", "2"]
console.log(eqArrays(result1,[2,3]));
console.log(eqArrays(result2,["1", "2"]));
console.log(result1,result2);// =>[2, 3], ["1", "2"]
assertArraysEqual(result1,[2, 3]);//assertion should pass
assertArraysEqual(result1,[1,2, 3]);//assertion should fail
assertArraysEqual(result2,['1','2']);//assertion should pass
assertArraysEqual(result2,[1,2, 3]);//assertion should fail
