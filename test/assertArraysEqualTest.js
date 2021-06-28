const assertArrayEqual = require("../assertArraysEqual")
const eqArrays = require("../eqArrays")

assertArrayEqual([1, 2, 3], [1, 2, 3])
assertArrayEqual([1, 2, 3], [1, "2", 3])