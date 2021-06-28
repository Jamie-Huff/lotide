const assertEqual = require('./assertEqual')

let tail = function(array, expected) {
  let empty = array.slice(1);
  for (let i = 0; i < empty.length; i++) {
    if (empty[i] !== expected[i]) {
      return assertEqual(1, 2);
    }
  }
  return assertEqual(1, 1);
};

module.exports = tail
