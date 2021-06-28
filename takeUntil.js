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


const takeUntil = (array, callback) => {
  for (let x = 0; x < array.length; x++) {
    if (callback(array[x])) {
      return array.slice(0, x)
    }
  }
}


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(assertArrayEqual(results1, [1, 2, 5, 7, 2]))

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(assertArrayEqual(results2, ["I've", 'been', 'to', 'Hollywood']))

module.exports = takeUntil