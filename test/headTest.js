/* eslint-disable linebreak-style */

const head = require('../head');
const assertEqual = require('../assertEqual');
assertEqual(head([4,5,6]),4);
assertEqual(head([4,5,6]),4);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),undefined);