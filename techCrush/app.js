const { path } =  require("path");
const { addition } = require("./my_modules/calculator");
const { substraction } = require("./my_modules/calculator");
const { division  } = require("./my_modules/calculator");
const { multiplication }  = require("./my_modules/calculator");

//base name of current file

let sum  = addition(2, 2);
console.log(sum);

let difference  = substraction(4, 8);
console.log(difference);

let multiples = multiplication(3, 3);
console.log(multiples);

let divide = division(2, 10);
console.log(division);
