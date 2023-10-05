const radius = [2, 4, 7, 3, 5];

// Calculate circumference
// Calculate diameter
// Calculate Area

function calCircumference(a) {
  return 2 * Math.PI * a;
}

function calDiameter(a) {
  return 2 * a;
}

function calArea(a) {
  return Math.PI * a * a;
}

function loopAndCalculate(arr, calculate) {
  const answers = [];
  for (let i = 0; i < radius.length; i++) {
    answers[i] = calculate(radius[i]);
  }
  return answers;
}

console.log(`Diameter is `, loopAndCalculate(radius, calDiameter));
console.log(`Circumference is `, loopAndCalculate(radius, calCircumference));
console.log(`Areas are `, loopAndCalculate(radius, calArea));
