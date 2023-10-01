console.log("Array!");

//Reacap

let a = [1, 2, 3];
// new Array()

// Remove last element
const e = a.pop();
console.log(a);
console.log(`Pop functions returns ${e}`);

//Remove first element
const f = a.shift();
console.log(a);
console.log(`Shift functions returns ${f}`);

//push an item to end
const g = a.push(10);
console.log(a);
console.log(`Push functions returns ${g}`);

// pushing to the start
const h = a.unshift(100);
console.log(a);
console.log(`Unshift functions returns ${h}`);

// // Nesed or 2D array
// a.push([1, 2, 3]);
// console.log(a);
// console.log(a[3][1]);

// // Push can take more than one elemnt -> it adds all to the end of the array
// a.push(1, 2, 3);
// console.log(a);

// Destructuring
// spread operator, takes an array and turns into a list of parameters
// Mostly used when passing an array/object in a function
a.push(...[1, 2, 3]); // convetred into a.push(1,2,3)
console.log(a);

// a.length - is a property of the array - not a function
const c = a.length;
console.log(c);

// a.psuh() - is a function and return the new length of array
const d = a.push(42);
console.log(d);
// let b = [3, 4, 5];
// console.log(...b[0]); -> not recommended it is Mostly used when passing an array/object in a function
