const eqArrays = require("./eqArrays")

const assertArrayEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return console.log("These arrays have equal values.")
  } 
  return console.log("The values are not equal.")

}

module.exports = assertArrayEqual

