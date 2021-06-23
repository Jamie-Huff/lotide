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


const middle = function (array) {
  let finalArray = []
  if (array.length === 2 || array.length === 1) {
    return []
  }
  if (array.length % 2 !== 0) {
    //return array[Math.floor(array.length / 2)]
    finalArray.push(array[Math.floor(array.length / 2)])
    return finalArray
  }
  if (array.length % 2 === 0) {
    finalArray.push(array[(array.length / 2 - 1)], array[(array.length / 2)])
    return finalArray
  }
}


console.log(assertArrayEqual(middle([1, 12, 89, 11, 42, 16]), [89, 11]))