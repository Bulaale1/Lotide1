/* eslint-disable linebreak-style */
const tail = require('../tail');
const assert = require('chai').assert;
// Test Cases:
const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
const array1 = [10,25,35,45];
const result1 = tail(array1);
const oneElement = [8];
const result2 = tail(oneElement);

describe("#tail", () => {
  it(` ✅✅✅ passes for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(array),result);
  });
  it(`✅✅✅ Passes for [10,25,35,45]`, () => {
    assert.deepEqual(tail(array1),result1);
  });
  it(`⛔⛔⛔ return false for [8]`, () => {
    assert.deepEqual(tail(oneElement),result2);
  });
});