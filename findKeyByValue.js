const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (items, value) {
  for (let key in items) {
    if (items[key] === value) {
      console.log(key)
      return key
    }
  }
  return undefined 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")); // "drama"
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)); // "undefined"