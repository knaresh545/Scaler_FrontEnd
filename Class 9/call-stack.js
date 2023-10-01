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
