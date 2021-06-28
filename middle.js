const assertArrayEqual = require("./assertArraysEqual")

const middle = function (array) {
  if (array.length === 0) {
    return [undefined]
  }
  console.log(array)
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

module.exports = middle