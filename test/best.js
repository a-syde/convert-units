var convert = require('../lib')
var assert = require('assert')
var tests = {}

tests['best mm'] = function () {
  var actual = convert(1200).from('mm').toBest()
  var expected = {
    val: 1.2,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters',
  }

  assert.deepEqual(actual, expected)
}

tests['excludes measurements'] = function () {
  var actual = convert(1200000).from('mm').toBest({ exclude: ['km', 'm'] })
  var expected = {
    val: 120000,
    unit: 'cm',
    singular: 'Centimeter',
    plural: 'Centimeters',
  }

  assert.deepEqual(actual, expected)
}

tests['does not break when excluding from measurement'] = function () {
  var actual = convert(10).from('km').toBest({ exclude: ['km'] })
  var expected = {
    val: 10000,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters',
  }

  assert.deepEqual(actual, expected)
}

tests['if all measurements are excluded return from'] = function () {
  var actual = convert(10).from('km').toBest({ exclude: ['mm, cm, m, km'] })
  var expected = {
    val: 10,
    unit: 'km',
    singular: 'Kilometer',
    plural: 'Kilometers',
  }

  assert.deepEqual(actual, expected)
}

tests['pre-cut off number'] = function () {
  var actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 })
  var expected = {
    val: 900,
    unit: 'cm',
    singular: 'Centimeter',
    plural: 'Centimeters',
  }

  assert.deepEqual(actual, expected)
}

tests['post-cut off number'] = function () {
  var actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 })
  var expected = {
    val: 10,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters',
  }

  assert.deepEqual(actual, expected)
}

module.exports = tests
