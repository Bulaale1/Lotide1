/* eslint-disable linebreak-style */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", actual, "===", expected);
  } else if (actual !== expected) {
    console.log("❌❌❌ Assertion Failed:", actual, "!==", expected);
  }
};
const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key in  obj1) {
    let property = obj1[key];
    for (let anotherKey in obj2) {
      let anotherProperty = obj2[anotherKey];
      if (key === anotherKey) {
        for (let i = 0; i < property.length; i++) {
          if (property[i] !== anotherProperty[i]) {
            return false;
          }
        }
      }
    }
  } return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject),true); // => true
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject , anotherShirtObject),true); // => false
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), true);// => false
