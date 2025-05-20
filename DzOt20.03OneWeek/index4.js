function primeNum(n) {
  if (n <= 1) {
    return `Не подходящее значение n`;
  }

  // Проверяем делители от 2 до квадратного корня из num
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return `Не простое число`; // Если num делится на i, то оно не простое
    }
  }

  return `Простое число`; // Если не нашли делителей, то число простое
}
console.log(primeNum(2));
console.log(primeNum(3));
console.log(primeNum(4));
console.log(primeNum(17));
console.log(primeNum(18));
console.log(primeNum(19));
