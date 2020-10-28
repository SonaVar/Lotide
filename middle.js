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

const middle = function(array) {
  let output = [];
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return output;
  } else if (array.length % 2 === 0) {
    let middle2 = Math.floor(array.length / 2);
    let middle1 = middle2 - 1 ;
    output.push(array[middle1], array[middle2]);
  } else if (array.length % 2 !== 0) {
    let index = Math.floor(array.length / 2);
    output.push(array[index]);
  }
  return output;
}

// TEST CODE

// Test Case 1 : Test if empty array is returned for array length being 0, 1 or 2
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);

// Test Case 2 : Test if middle element is returned for array length being odd
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test Case 3 : Test if middle two elements are returned for array length being even
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);