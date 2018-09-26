module.exports = function solveEquation(equation) {
  // your implementation
    let a, b, c;
    [a, b, c] = getValue(equation);
    return getXSorted(a, b, c);
}

function getValue(equation) {
  let a = equation.split(' * x^2')[0];
  let aSign = equation.split(a + ' * x^2')[0];
  a = parseInt(aSign + a);
  let bSign = equation.split(a + ' * x^2 ')[1].charAt(0);
  let b = equation.split(' * x^2 ' + bSign + ' ')[1].split(' * x ')[0];
  b = parseInt(bSign + b);
  let cSign = equation.split(' * x ')[1].charAt(0);
  let c = equation.split(' * x ' + cSign + ' ')[1];
  c = parseInt(cSign + c);
  return [a, b, c];
}

function getXSorted(a, b, c) {
  let sorted = [];
  sorted.push(getX('+', a, b, c));
  sorted.push(getX('-', a, b, c));
  sorted.sort((a, b) => a - b);
  return sorted;
}

function getX(sign, a, b, c) {
  let x, b1, a1, c1;
  b1 = parseInt(- + b);
  a1 = 2 * a;
  c1 = Math.sqrt((b * b) - 4 * a * c);
  return x = Math.round((sign === '+') ? ((b1 + c1) / a1) : ((b1 - c1) / a1));
}