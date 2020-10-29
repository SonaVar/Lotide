const takeUntil = function(array, callback) {
  const results = [];
  for (let data of array) {
    let value = callback(data);
    if (!value) {
      results.push(data);
    } else {
      return results;
    }
  }
  return results;
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i ++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log((eqArrays(arrayOne, arrayTwo)) ? `✅✅✅ ${arrayOne} === ${arrayTwo}` : `🛑🛑🛑 ${arrayOne} !== ${arrayTwo}`);
};


// Test Case 1:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

//Test case 2:
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// Test Case 3:
const words = ["ground", "control", "to", "major", "tom", "ice", "ice", "baby"];
const results3 = takeUntil(words, word => word[0] === 'i');
assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);

// Test Case 4:
const numbers = [2, 4, 6, 8, 10, 12, 14];
const results4 = takeUntil(numbers, numb => numb % 2 !== 0);
assertArraysEqual(results4, [2, 4, 6, 8, 10, 12, 14]);