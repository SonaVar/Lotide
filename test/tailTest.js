const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("return every element of the array except the first", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});