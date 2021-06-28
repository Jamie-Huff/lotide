const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = (object, callback) => {
    for (const value in object) {
      if (callback(object[value])) {
        return value
    }
  }
}


const results1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

// console.log(assertEqual(results1, "noma"))

module.exports = findKey