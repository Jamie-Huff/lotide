const middle = require("../middle")
const assertArrayEqual = require("../assertArraysEqual")


assertArrayEqual(middle([1, 12, 89, 11, 42, 16]), [89, 11])
assertArrayEqual(middle([1, 12, 15, 12, 42, 16]), [15, 12])