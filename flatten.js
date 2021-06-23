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

const flatten = function(array) {
  let finalArray = []
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      finalArray.push(array[i])
    }
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        finalArray.push(array[i][x])
      }
    }
  }
  return finalArray
}

console.log(assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]))