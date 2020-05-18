const convert = require('./lib/index')

// console.log(convert(100).from('kg m').to('mt km'));
// console.log(convert(100).from('kg m').to('t mi'));

// console.log(convert(100).from('l/kg m').to('l/mt km'));
console.log(convert(100).from('l/kg m').to('l/mt km'));
console.log(convert(100).from('l/kg m').to('gal/t mi'));

