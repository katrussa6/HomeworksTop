// Объект-дробь
function Fraction(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator;
}

// Функция для вычисления НОД (наибольшего общего делителя) — для сокращения дроби
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Функция для сокращения дроби
function reduceFraction(fraction) {
  const divisor = gcd(Math.abs(fraction.numerator), Math.abs(fraction.denominator));
  fraction.numerator /= divisor;
  fraction.denominator /= divisor;
  // Обеспечиваем знак в числителе
  if (fraction.denominator < 0) {
    fraction.numerator = -fraction.numerator;
    fraction.denominator = -fraction.denominator;
  }
}

// Функция сложения двух дробей
function addFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.denominator + frac2.numerator * frac1.denominator;
  const denominator = frac1.denominator * frac2.denominator;
  const result = new Fraction(numerator, denominator);
  reduceFraction(result);
  return result;
}

// Функция вычитания двух дробей
function subtractFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.denominator - frac2.numerator * frac1.denominator;
  const denominator = frac1.denominator * frac2.denominator;
  const result = new Fraction(numerator, denominator);
  reduceFraction(result);
  return result;
}

// Функция умножения двух дробей
function multiplyFractions(frac1, frac2) {
  const numerator = frac1.numerator * frac2.numerator;
  const denominator = frac1.denominator * frac2.denominator;
  const result = new Fraction(numerator, denominator);
  reduceFraction(result);
  return result;
}

// Функция деления двух дробей
function divideFractions(frac1, frac2) {
  if (frac2.numerator === 0) {
    throw new Error("Деление на ноль");
  }
  const numerator = frac1.numerator * frac2.denominator;
  const denominator = frac1.denominator * frac2.numerator;
  const result = new Fraction(numerator, denominator);
  reduceFraction(result);
  return result;
}

// Пример использования:
const f1 = new Fraction(1, 2); // дробь: 1/2
const f2 = new Fraction(3, 4); // дробь: 3/4

console.log("Сложение:", addFractions(f1, f2)); // результат: (1/2 + 3/4)
console.log("Вычитание:", subtractFractions(f1, f2)); // результат: (1/2 - 3/4)
console.log("Умножение:", multiplyFractions(f1, f2)); // результат: (1/2 * 3/4)
console.log("Деление:", divideFractions(f1, f2)); // результат: (1/2 ÷ 3/4)