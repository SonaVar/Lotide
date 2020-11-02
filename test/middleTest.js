const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("return empty array for array length being 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("return empty array for array length being 1", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return empty array for array length being 0", () => {
    assert.deepEqual(middle([]), []);
  });
  it("return middle element for array length being odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("return middle two elements for array length being even", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});