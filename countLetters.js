const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(string) {
  stringArray = string.split(' ').join('')
  let finalLetterCountObject = {}
  stringArray = stringArray.split('')
  for (let i = 0; i < stringArray.length; i++) {
    if (finalLetterCountObject[stringArray[i]]) {
      finalLetterCountObject[stringArray[i]] += 1
    }
    if (!finalLetterCountObject[stringArray[i]]) {
      finalLetterCountObject[stringArray[i]] = 1
    }
  }

  return finalLetterCountObject
}

// console.log(letterPositions("big string"))

// let finalObject = letterPositions("big string")
// console.log(finalObject)
// assertEqual(finalObject["i"], 2)