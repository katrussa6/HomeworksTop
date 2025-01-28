function PerfectNumber(num) {
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

// Запрашиваем у пользователя ввод чисел
const userInputOne = prompt("Введите первое положительное целое число:");
const userInputTwo = prompt("Введите второе положительное целое число:");
const numberOne = Number(userInputOne);
const numberTwo = Number(userInputTwo);

if (!isNaN(numberOne) && !isNaN(numberTwo) && numberOne > 0 && numberTwo > 0 && numberOne < numberTwo) {
    let results = [];

    // Проверяем каждое число в диапазоне
    for (let i = numberOne; i <= numberTwo; i++) {
        if (PerfectNumber(i)) {
            results.push(`${i} является совершенным числом.`);
        }
    }

    // Проверяем, нашли ли мы совершенные числа
    if (results.length === 0) {
        results.push("В указанном диапазоне нет совершенных чисел.");
    }

    // Выводим результаты
    alert(results.join('\n'));
} else {
    alert("Пожалуйста, введите корректные положительные целые числа, где первое меньше второго.");
}