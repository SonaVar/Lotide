const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
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

const words = ["ground", "control", "to", "major", "tom", "ice", "ice", "baby"];

const result1 = map(words, word => word[0]);

assertArraysEqual(result1, ['g', 'c', 't', 'm', 't', 'i', 'i', 'b']);

// Test Case 2:

const numbers = [2, 4, 6, 8, 10, 12, 14];

const result2 = map(numbers, numb => numb / 2);

assertArraysEqual(result2, [1, 2, 3, 4, 5, 6, 7]);

// Test Case 3:

const songs = [
  {artist: 'Maroon 5', song: 'Memories'},
  {artist: 'Queen', song: 'We Will Rock You'},
  {artist: 'Beyonce', song: 'Irreplaceable'},
  {artist: 'Rihanna', song: 'Diamonds'}
];

const result3 = map(songs, artists => artists.artist);

assertArraysEqual(result3, ['Maroon 5', 'Queen', 'Beyonce', 'Rihanna']);