const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["yo yo", "Lighthouse", "Labs"];

let tail = function(array, expected) {
  let empty = [];
  for (let i = 1; i < array.length; i++) {
    empty.push(array[i]);
  }
  for (let i = 0; i < empty.length; i++) {
    console.log(empty[i], expected[i])
    if (empty[i] !== expected[i]) {
      return assertEqual(1, 2)
    }
  }
  return assertEqual(1, 1)
};



console.log(tail(words, ["Lighthouse", "Labs"]))


