// Array data types

// let a = [1, 2, 32, 3];
// let b = [1];

// console.log(a, b);
// console.log(typeof a, typeof b);

// // lenght property of array -> no of itmes inside the array
// console.log(a.length, b.length);
// console.log(`The first element of my array is ${a[0]}`);
// console.log(`THe first element of my array is ${a[100]}`);

// // This will add an element to the end of an array
// b.push(3);
// console.log(a.length, b, b.length);

// // this will add an element to the beginning of an array
// b.unshift(10);
// console.log(a.length, b, b.length);

// // this will remve the last element of an array
// b.pop();
// console.log(a.length, b, b.length);

// // this will remove the first element of an array
// b.shift();
// console.log(a.length, b, b.length);

// Objects data types
// key-value pair where key can be a string value can be anything, any data type that you have seen till now

// let object = {
//   a: 5,
//   b: 10,
//   c: "hello",
//   d: null,
//   e: true,
//   f: [1, 2, 3, 4],
//   g: {
//     a: 100,
//   },
// };

// console.log(object.f[2]);
// console.log(object.g.a);

// // how to access keys of an object
// // 1: Dot notation
// console.log(object.a);
// //2: Index notation
// console.log(object["c"]);

// function data types
// 1: functon keyword
// function isEven(number) {
//   const isEvenValue = number % 2;
//   return isEvenValue == 0 ? "True" : "False";
// }

// const returnValue = isEven(11);
// console.log(returnValue);

// 2:
const isEven = function (number) {
  const isEvenValue = number % 2;
  return isEvenValue == 0 ? "True" : "False";
};

const isEvenValue = (number) => {
  const isEvenValue = number % 2;
  return isEvenValue == 0 ? "True" : "False";
};
const returnValue = isEven(10);
console.log(returnValue);
const returnValue1 = isEvenValue(11);
console.log(returnValue1);
