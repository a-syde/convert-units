const convert = require('./lib/index')

console.log(convert(1).from('l/s').to('l/h'));
console.log(convert(1).from('l/s').to('gal/h'));
