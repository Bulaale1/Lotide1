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
  for (let key in obj1) {
    let property1 = obj1[key];
    let property2 = obj2[key];
    if (typeof(property1) === 'object' && typeof(property2) === 'object') {
      for (let i = 0; i < property1.length; i++) {
        if (property1[i] !== property2[i]) {
          return false;
        }
      }
    } else {
      if (property1[key] !== property2[key]) {
        return false;
      }
  
    }
  } return true;
};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , anotherShirtObject),true); // => true
assertEqual(eqObjects(longSleeveMultiColorShirtObject , anotherShirtObject),false); // => false
assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);//should pass
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);// => should pass
