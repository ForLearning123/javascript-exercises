const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let result = 0
  for (i of arr){
    result += i;
  }
  return result
};

const multiply = function(arr) {
  let result = 1
  for (i of arr){
    result *= i;
  }
  return result
};

const power = function(x, exp){
  return Math.pow(x, exp)
};

const factorial = function(x) {
	let result = 1;
  for (let i = 1; i <= x; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
