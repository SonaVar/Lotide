const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Case 1 : Test if empty array is returned for array length being 0, 1 or 2
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);

// Test Case 2 : Test if middle element is returned for array length being odd
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test Case 3 : Test if middle two elements are returned for array length being even
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);