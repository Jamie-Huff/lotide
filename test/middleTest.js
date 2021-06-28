const middle = require("../middle")
const assertArrayEqual = require("../assertArraysEqual")
const assert = require('chai').assert;

describe('#middle returns the middle value(s)', () => {
  it ('returns 2 middle values for even length', () => {
    assert.deepEqual(middle([1, 12, 89, 11, 42, 16]), [89, 11])
  })
  it ('returns 1 middle value for odd level array, return 2 for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  })
  it ('returns undefined for []', () => {
    assert.deepEqual(middle([]), [undefined])
  })
})






// assertArrayEqual(middle([1, 12, 89, 11, 42, 16]), [89, 11])
// assertArrayEqual(middle([1, 12, 15, 12, 42, 16]), [15, 12])