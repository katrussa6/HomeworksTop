function isPerfectNumber(num) {
  if (num <= 1) return false; // Совершенные числа больше 1

  let sum = 0;

  // Находим делители и суммируем их
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  // Проверяем, равно ли число сумме своих делителей
  return sum === num;
}

// Запрашиваем у пользователя ввод числа
const userInput = prompt("Введите положительное целое число:");
const number = Number(userInput);

if (!isNaN(number) && number > 0) {
  if (isPerfectNumber(number)) {
    alert(`${number} является совершенным числом.`);
  } else {
    alert(`${number} не является совершенным числом.`);
  }
} else {
  alert("Пожалуйста, введите корректное положительное целое число.");
}
