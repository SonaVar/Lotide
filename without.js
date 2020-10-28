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

const without = function(source, remove) {
  let position = [];
  let output = [];
  for (let i = 0; i < source.length; i ++) {
    position.push(source[i]);
    for (let j = 0; j < remove.length; j++) {
      if (remove[j] === source[i]) {
        position.splice(i, 1, ' ');
      }
    }
    if (position[i] !== ' ') {
      output.push(position[i]);
    }
  }
  return output;
};

//Test Case 1 : Make sure original array is not altered
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//Test Case 2 : Return array without items to be removed
const numbersCase2 = [1, 2, 3];
assertArraysEqual(without(numbersCase2, [3]), [1, 2]);

//Test Case 3 : Return array without items to be removed when source array has similar elements to be removed
const numbersCase3 = [1, 1, 3];
assertArraysEqual(without(numbersCase3, [1]), [3]);

//Test Case 4 : Return empty array without items to be removed when source array has similar elements to be removed
const numbersCase4 = [1, 1];
assertArraysEqual(without(numbersCase4, [1]), []);

//Test Case 5 : Return array without items to be removed when source array has different types
const numbersCase5 = ["1", "2", "3"];
assertArraysEqual(without(numbersCase5, [1, 2, "3"]), ["1", "2"]);