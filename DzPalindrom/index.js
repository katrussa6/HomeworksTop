let firstValue = "12321";
let secondValue = "А роза упала на лапу Азора";
let thirdValue = "Я люблю шоколад";

function palindrom(value) {
  // Приводим строку к нижнему регистру и удаляем все символы, кроме букв
  let normalizedValue = value.toLowerCase().replace(/[^a-zа-яё]/g, "");

  let transformValue = normalizedValue.split(""); //делаем из строки массив

  let reversTransformValue = transformValue.reverse(); // переворачиваем его

  let reversTransformValueString = reversTransformValue.join(""); //  возвращаем обратно в строку

  //   Так разом можно но сложно эта лупа называется - чейнить
  //  let reversTransformValueString = normalizedValue.split('').reverse().join('');

  // if ( normalizedValue=== reversTransformValueString){ // сравниваем исходную строку со строкой возвращенной и перевернутой
  //      console.log('Это палиндром');
  //  }
  // else {(normalizedValue !== reversTransformValueString)

  //       console.log('Это не палиндром');
  // }

  return normalizedValue === reversTransformValueString; // Сравниваем нормализованную строку с ее перевернутой версией
}

console.log(palindrom(firstValue));
console.log(palindrom(secondValue));
console.log(palindrom(thirdValue));
