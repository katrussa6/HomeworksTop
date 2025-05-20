const arrNums = [
  2, 2, 33, 48, 168, 3, 87, 22, 9, 9, 12, 2, 53, 87, 30, 6, 7, 28, 3, 9,
];

function sumOfSquareRoots(arr) {
  return arr.map(Math.sqrt).reduce((acc, curr) => acc + curr, 0);
}

const resultOne = sumOfSquareRoots(arrNums);
console.log("Сумма квадратных корней:", resultOne);

//первый способ массив без дублей
const uniqueArray = [...new Set(arrNums)];
console.log(uniqueArray);

//второй способ массив без дублей
//const uniqueArr = arrNums.reduce((accumulator, current) => {
//  if (!accumulator.includes(current)) {
//      accumulator.push(current);
//  }
//  return accumulator;
//}, []);
//console.log(uniqueArray);

//третий способ массив без дублей
//const uniqueArra = []; 
//for (let i = 0; i < arrNums.length; i++) {
//    if (!uniqueArray.includes(arrNums[i])) {
//        uniqueArray.push(arrNums[i]);
//    }
//}
//console.log(uniqueArray);

//четвертый способ массив без дублей
//const uniqueAr = array.filter((value, index) => array.indexOf(value) === index);
//console.log(uniqueArray);


const uniqueArrTree = [];

for (let i = 0; i < arrNums.length; i++) {
    // Проверяем, является ли текущий элемент равным следующему
    if (arrNums[i] !== arrNums[i + 1]) {
        uniqueArrTree.push(arrNums[i]); 
        // Если не равны, добавляем в новый массив
    }
}

console.log(uniqueArrTree);