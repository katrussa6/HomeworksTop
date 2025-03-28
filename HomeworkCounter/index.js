const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counterDisplay = document.querySelector("#counter");
counter = 0

//Функция updateCounterDisplay: Эта функция обновляет текст
// в элементе счетчика, чтобы отобразить текущее значение counter.
function updateCounterDisplay() {
    counterDisplay.textContent = counter; // Обновляем текст в элементе счетчика

}
// Обработчик события для кнопки "плюс"
plus.addEventListener("click", () => {
    counter += 1; 
    updateCounterDisplay(); 
//После каждого изменения мы вызываем updateCounterDisplay, чтобы обновить отображение.
});


minus.addEventListener("click", () => {
    counter -= 1; // Уменьшаем счетчик на 1
    updateCounterDisplay(); // Обновляем отображение
});

// Инициализация отображения счетчика при загрузке страницы
updateCounterDisplay();


