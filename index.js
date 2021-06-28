const head = require('./head')
const tail = require('./tail')
const middle = require('./middle')
const assertArrayEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectEqual = require('./assertObjectsEqual')
const countOnly = require('./countOnly')
const eqArrays = require('./recursiveEqArrays')
const eqObjects = require('./recursiveEqObjects')
const findKey= require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const map = require('./map')
const takeUntil = require('./takeUntil')
const without = require('./without')



module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
}