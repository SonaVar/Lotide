const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log ((eqArrays(arrayOne, arrayTwo)) ? `✅✅✅ ${arrayOne} === ${arrayTwo}` : `🛑🛑🛑 ${arrayOne} !== ${arrayTwo}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);