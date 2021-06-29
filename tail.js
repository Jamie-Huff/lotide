const assertEqual = require('./assertEqual')

let tail = (array) => {
array.shift()
return array
}

module.exports = tail
