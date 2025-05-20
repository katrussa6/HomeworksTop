function numPow(x, y) {
  let res = Math.pow(x, y);
  return res;
}

console.log(numPow(3, 2));

function pow(a, b) {
  if (b === 0) return 1;
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log(pow(3, 2));

