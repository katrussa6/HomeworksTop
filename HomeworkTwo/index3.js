let n = +prompt('Введите число');
 
for (let i = 1; i * 1 <= n; i++) {
    if (n % i == 0) {
        alert(`Делители этого числа: ${i}`);
    }
}
