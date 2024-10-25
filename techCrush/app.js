const path =  require('path');
const addition = require('./my_modules/calculator');
const substraction = require('./my_modules/calculator');
const division  = require('./my_modules/calculator');
const multiplication  = require('./my_modules/calculator');

//base name of current file

const sum  = addition(2, 2);
console.log(sum);

