let num = prompt("Введите  число : ");
function getDigitAmount(n) {
  let c = 0;
  while (c < n.length) c++;
  return c;
}
alert(getDigitAmount(num));
