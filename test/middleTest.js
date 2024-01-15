/* eslint-disable linebreak-style */
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it(`returns an empty array when the input array has only one element. `, () => {
    assert.deepEqual(middle([1]),[]);
  });
  it(`should return [] for [1, 2])`, () => {
    assert.deepEqual(middle([1, 2]),[]);
  });
  it(` it should return true for [1, 2, 3, 4, 5, 6] `, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });
  it(`it should return true for [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
});