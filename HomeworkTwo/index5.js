let arr = prompt('введите 10 чисел через побел','-1 7 15 -2 -4 8 0 10 -3 175').split` `;
 
let positive = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 1).length,
    negative = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == -1).length,
    loyal = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 0).length;
 
if(positive) alert('Положительных: ' + positive);
if(negative) alert('Отрицательных: ' + negative);
if(loyal) alert('Нулей: ' + loyal);