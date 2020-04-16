var convert = require('../lib')
var assert = require('assert')
var tests = {}

tests['get kg'] = function () {
  var actual = convert().describe('kg')
  var expected = {
    abbr: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms',
  }

  assert.deepEqual(actual, expected)
}

tests['get ac'] = function () {
  var actual = convert().describe('ac')
  var expected = {
    abbr: 'ac',
    measure: 'area',
    system: 'imperial',
    singular: 'Acre',
    plural: 'Acres',
  }

  assert.deepEqual(actual, expected)
}

module.exports = tests
