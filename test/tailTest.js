const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail returns everything but the first value', () => {
  it ('returns 2, 3 for [1, 2, 3]', () => {
    assert.strictEqual(tail([1, 2, 3], [2, 3]));
  })
  it ('returns [] for ["5"]', () => {
    assert.strictEqual(tail(["5"], []), undefined)
  })
  it ('returns 6, 7 for [5, 6, 7]', () => {
    assert.strictEqual(tail([5, 6, 7], [6, 7]))
  })
  it ('returns undefined for []', () => {
    assert.strictEqual(tail([]), undefined)
  })
})