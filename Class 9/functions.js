// Ways to define a function

// 1: Functin keyword -> function <function_name>(){}
function sum(a, b) {
  return a + b;
}

const a = sum(4, 5);
console.log(a);

//2: Function expression -> <variable_name> = function(){}
// Anonymous function - doesn't have name
var sum2 = function (a, b) {
  return a + b;
};
var sub = function (a, b) {
  return a - b;
};
console.log(sum2(1, 2));
console.log(sum2(2, 3));
console.log(sub(5, 1));

// 3: Arrow function
// By itsef, arrow function don't have any name
// Arrow functions must always assigned to a variable
// Arrow functions are anonymous.
const sum3 = (a, b) => {
  return a + b;
};
console.log(sum3(3, 4));

const square = (a) => {
  return a * a;
};

// If I have a single argument we are passing then we can omit the parenthasis
// If I have only a single return statement in the body of the function, I can omit body and directly write the value of the return
const square1 = (a) => a * a;

console.log(square(5));
console.log(square1(6));

// Function in JS are first -class citizen, wich means we can pass in functions as parametes to other function
function callMe(fn) {
  console.log(fn());
}
callMe(() => 6);

function callMe(fn) {
  console.log(fn(9, 8));
}
callMe(sum);
