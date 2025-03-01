// Массив стилей
const styles = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '30px' },
    { name: 'text-align', value: 'center' },
    { name: 'text-decoration', value: 'underline' }
];

// Функция для вывода текста с применением стилей
function applyStylesAndWriteText(stylesArray, text) {
    // Создаем строку стилей
    const styleString = stylesArray.map(style => `${style.name}: ${style.value};`).join(' ');

    // Формируем HTML-код с применением стилей
    const html = `<p style="${styleString}">${text}</p>`;

    // Выводим HTML-код на страницу
    document.write(html);
}

// Пример использования функции
applyStylesAndWriteText(styles, 'Привет, мир!');