/*let userNum = prompt ('введите число из 3 символов')
userNum !== 0. Пока num !== 0 берем последнюю цифру от num,
 делим этот num на 10, добавляем порядок к result и плюсуем
  последнюю цифру к result. Dариант с 0 не работает с обоих краев*/
  var x = 598;
  var y = 0;
  for(; x; x = Math.floor(x / 10)) {
      y *= 10;
      y += x % 10;
  }
  console.log(y);
/*let userNum = prompt ('введите число из 3 символов')
  var y = 0;
  for(; userNum ; userNum  = Math.floor(userNum  / 10)) {
    y *= 10;
    y += userNum  % 10;
}
console.log(y); такая же фигня с 0, как и в прошлом
 */

