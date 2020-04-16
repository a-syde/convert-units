var convert = require('../lib')
var assert = require('assert')
var tests = {}

tests['kg/m to t/mi'] = function () {
  assert.strictEqual(convert(1).from('kg/m').to('t/mi'), 1.60934)
}

tests['t/mi to kg/m'] = function () {
  assert.strictEqual(convert(1).from('t/mi').to('kg/m'), 0.621371)
}
