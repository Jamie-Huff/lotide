const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴️ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(array1, array2) {
  let finalarray = []
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      finalarray.push(array1[i])
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}




const eqObjects = function(object1, object2) {
  let obj1Length = 0
  let obj2Length = 0
  let counter = 0
  let arrayEqual = []
  // find out the length of object 1
  for (let key in object1) {
    counter++
  }
  
  obj1Length = counter
  counter = 0
  // find length of object 2
  for (let key in object2) {
    counter++
  }
  // if they are not the same return false
  obj2Length = counter
  if (obj1Length !== obj2Length) {
    return false
  }

  for (let key in object1) {
    if (object1[key] !== object2[key]) {
    }
    if (Array.isArray(object1[key])) {
      arrayEqual = eqArrays(object1[key], object2[key])
      // if (object1[key].length !== object2[key].length) {
      //   return false
      // }
      // for (let i = 0; i < object1[key].length; i++) {
      //   if (object1[key][i] !== object2[key][i]) {
      //     return false
      //   }
      // }
    }
  }
  
  if (!arrayEqual) {
    return false
  }
  return true
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

let firstObj = {
  name: "Jamie",
  dog: "yes",
  boy: true,
  kids: ["bob", "joe", "steve"]
}
let secondObj = {
  name: "Jamie",
  dog: "yes",
  boy: true,
  kids: ["bob", "joe", "steve"]
}

console.log(eqObjects(firstObj, secondObj))
console.log(assertEqual(eqObjects(firstObj, secondObj), true))
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(assertEqual(eqObjects(cd, dc), true))
console.log(assertEqual(eqObjects(cd, cd2), false))