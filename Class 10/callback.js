// Callback function: function passed as argument is called function
// Any function receiving any function as argument  OR returning a function is called HOF(Higher Order Function)

function example1() {
  console.log("Called from example 1");
}

const num1 = 1;
const num2 = 2;

function example2(a, b, fn) {
  console.log(a + b);
  fn();
  console.log("Called from example 2");
}

//console.log(example1());
//console.log(example2());
//console.log(example2(1, 2));
//console.log(example2(num1, num2, example1));

// HOF -> value of the function is increased
function sumOfSquare(a, b, sqr) {
  const aSquare = sqr(a);
  const bSquare = sqr(b);
  return aSquare + bSquare;
}

function squareOfANumber(num) {
  return num * num;
}

console.log(sumOfSquare(1, 2, squareOfANumber));
