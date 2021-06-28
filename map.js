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
// Above for code testing
//---------------------------------------------------------------------------
// Below for function


const map = (array, callback/*this is a function*/) => {
  const results = []
  for (let item of array) {
    results.push(callback(item))
  }
  return results
}


//--------------------------------------------------------------------------

// let words = ["ground", "control", "to", "major", "tom"];
// let results1 = map(words, word => word[0]);
// console.log(assertArrayEqual(results1, ["g", "c", "t", "m", "t"] ))


// words = ["this", "dog", "is", "a", "racoon"];
// results1 = map(words, word => word.length);
// console.log(assertArrayEqual(results1, [4, 3, 2, 1, 6] ))
//---------------------------------------------------------------------------
/* 
Syntax notes
in: let results1 = map(words, word => word[0]);
sets "word" equal too whatever we are requesting after the => parameter
for example in our 2nd time that we are runing our function
instead of asking for word => word[0], which is then pushing word[0] to our newArray

I am asking for word => word.length, which is then pushing word.length to our newArray
which returns us an array of numbers
*/

module.exports = map