/* eslint-disable linebreak-style */
const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key in obj1) {
    let property1 = obj1[key];
    let property2 = obj2[key];
    if (Array.isArray(property1)  && Array.isArray(property2)) {
      for (let i = 0; i < property1.length; i++) {
        if (property1[i] !== property2[i]) {
          return false;
        }
      }
    } else {
      if (property1 !== property2) {
        return false;
      }
    }
  } return true;
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(object1, object2)) {
    // ${inspect(actual)
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)}  !== ${inspect(object2)}`);
  }
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(shirtObject,anotherShirtObject);
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);
assertObjectsEqual(longSleeveMultiColorShirtObject,anotherMultiColorShirtObject);

