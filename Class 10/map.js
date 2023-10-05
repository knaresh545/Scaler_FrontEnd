// Inbuilt Higher order funcion
// A few HOF which are in built to Arrays
// arr.map(), arr.filter(), arr.every()

// const arr = [1, 2, 3, 4, 5];

// // const results = [];

// // for (let i = 0; i < arr.length; i++) {
// //   results[i] = arr[i] + 10;
// // }

// // console.log(results);

// /* **************************************************************************************************************************************************************************** */

// // Map
// // Array HOF do not modify/change/update the original array. Returns another array/boolean/number.

// function transformer(elem) {
//   return elem + 10;
// }

// // const newArray = arr.map(function (elem) {
// //   return elem + 10;
// // });

// const newArray = arr.map(transformer);

// console.log(arr);
// console.log(newArray);

// /* **************************************************************************************************************************************************************************** */

// // Filter

// function transformerFilter(elem) {
//   // returns true if condition me, return fase otherwise
//   return elem % 2 == 0;
// }
// const newArray1 = arr.filter(transformerFilter);

// console.log(newArray1);

// /* **************************************************************************************************************************************************************************** */

// // Foreach

// function action(elem) {
//   //return elem + 10;
//   console.log(elem);
//   console.log(elem + 10);
// }

// const newArray2 = arr.forEach(action);
// console.log(newArray2);

// // Map vs Foreach
// // Map will create a new array with the transformer function passed and Foreach will return undefined, it only performs an action for each element of my array.

// /* **************************************************************************************************************************************************************************** */

// // Every - return type is boolean

// const arr1 = [-5, 7, -12, 4];
// // const arr1 = [5, 6, 1, 12, 13, 17];

// function condition(elem) {
//   return elem > 0;
// }
// console.log(arr1.every(condition));

// // Some - return typr is boolean
// // If even a single element satisfies the condition, it will return true, otherwise false

// console.log(`some `, arr1.some(condition));

/* **************************************************************************************************************************************************************************** */

// Reduce - compress/transform all array elements into a single element
// Q [1+2+3+4+5+6] = ??

const arr2 = [1, 2, 3, 4, 5, 6];

let sum = 0;

for (let i = 0; i < arr2.length; i++) {
  sum = sum + arr2[i];
}

//console.log(sum);

// const ans = arr2.reduce(function (accumulator, elem, index) {
//   console.log(index);
//   accumulator = accumulator + elem;
//   return accumulator;
// }, 0);

// accumulator is same as sum variable NS Zero we passed in above reduce function is initial value of accumulator

const ans = arr2.reduce(function (accumulator, elem, index) {
  console.log(index);
  accumulator = accumulator + elem;
  return accumulator;
});

// If no accumulator value is given in the reduce function then
// 1. First array element will become accumulator value
// 2. loop will start from second element

console.log(ans);
