const eqArrays = require('../lotide/eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo)) ? `✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}` : `🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
};

module.exports = assertArraysEqual;