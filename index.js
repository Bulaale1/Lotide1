/* eslint-disable linebreak-style */
// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const withOut = require('./withOut');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual:assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual:assertObjectsEqual,
  countLetters:countLetters,
  countOnly:countOnly,
  eqArrays:eqArrays,
  eqObjects:eqObjects,
  map:map,
  takeUntil:takeUntil,
  findKey:findKey,
  findKeyByValue:findKeyByValue,
  letterPositions:letterPositions,
  withOut:withOut

};