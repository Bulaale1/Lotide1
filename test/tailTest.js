/* eslint-disable linebreak-style */
const tail = require('../tail');
const assert = require('chai').assert;
// Test Cases:
const array = ["Hello", "Lighthouse", "Labs"];
const array1 = [10,25,35,45];
const oneElement = [8];
describe("#tail", () => {
  it(` ✅✅✅ passes for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(array), ["Lighthouse", "Labs"]);
  });
  it(`✅✅✅ Passes for [10,25,35,45]`, () => {
    assert.deepEqual(tail(array1), [25,35,45]);
  });
  it(`returns an empty array when the input array has only one element`, () => {
    assert.deepEqual(tail(oneElement), []);
  });
});