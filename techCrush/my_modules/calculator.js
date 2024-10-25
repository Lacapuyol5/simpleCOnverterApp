function addition(a, b) {
return a + b;
}


function substraction (a, b) {
return a - b;
}


function multiplication(a, b) {
return a * b;
}


function division(a, b) {
if (b === 0){
return "Division by zero is undefined";}
  return a / b;
}

module.exports = {
addition,
substraction,
  multiplication,
  division
};
