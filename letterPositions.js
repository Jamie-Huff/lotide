const eqArrays = function(array1, array2) {
  let finalarray = []
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      finalarray.push(array1[i])
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return "These arrays have equal values."
  } 
  return "The values are not equal."
}


const letterPositions = function(string) {
  let finalLetterCountObject = {}
  stringArray = string.split('')
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === " ") {
      continue
    }
    if (finalLetterCountObject[stringArray[i]]) {
      finalLetterCountObject[stringArray[i]].push(i)
    }
    if (!finalLetterCountObject[stringArray[i]]) {
      finalLetterCountObject[stringArray[i]] = [i]
    }
  }

  return finalLetterCountObject
}



console.log(letterPositions("big string"))
let letterFinalObject = letterPositions("big string")

console.log(assertArrayEqual(letterFinalObject["i"], [ 1, 7]))

module.exports = letterPositions