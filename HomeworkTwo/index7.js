let count = prompt('Введите число','')
let step = +prompt('На сколько сдвинуть', '0')
arr = count.split('');
  
 
 
for(let i = 0; i < step; i++) {
  arr.push(arr.shift())
}
alert(arr.join``);