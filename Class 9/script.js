// // Declare and initialize a
// console.log(p);
// var a = 10;

// // Define square funcion expression
// var square = function (num) {
//   return num * num;
// };

// console.log("Hi");

// //Call square functin with a and store the return value in b
// var b = square(a);

// var p = 1000;
// //console.logging b
// console.log(b);

// console.log(a);

function square(num) {
  return num * num;
}

function callSquare(num) {
  square(num);
}

function callCallSquare(num) {
  return callSquare(num);
}

const a = callCallSquare(10);
console.log(a);
