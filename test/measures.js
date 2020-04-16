var convert = require('../lib')
var assert = require('assert')
var tests = {}

tests['measures'] = function () {
  var actual = convert().measures()
  var expected = [
    'length',
    'area',
    'mass',
    'volume',
    'each',
    'temperature',
    'time',
    'digital',
    'partsPer',
    'speed',
    'pace',
    'pressure',
    'current',
    'voltage',
    'power',
    'reactivePower',
    'apparentPower',
    'energy',
    'reactiveEnergy',
    'volumeFlowRate',
    'illuminance',
    'frequency',
    'angle',
    'charge',
    'force',
    'acceleration',
    'massVelocity',
  ]
  assert.deepEqual(actual, expected)
}

module.exports = tests
