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
const without = function(array1, array2) {
  let arrayFinal = [...array1] // our final array currently contains all the values of our array
  for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < array1.length; x++) {
      if (array2[i] === arrayFinal[x]) {

        arrayFinal.splice(x, 1)
      }
    }
  }

  return arrayFinal
}
// console.log(assertArrayEqual(without([2, 3, 1], [1]), [2, 3]))

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArrayEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without