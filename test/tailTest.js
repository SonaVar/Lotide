const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("check whether the array remains unchanged", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 3);
  });
});