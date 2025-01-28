let balance = prompt ('введите баланс');//запрашиваем у пользователя баланс
let sweetCoast = prompt ("введите стоимость");//запрашиваем у пользователя цену на 1 ед продукт
let countSweet = balance/sweetCoast; // кол-во товара которое мы можем купить с остатком
let change = balance % sweetCoast ;// сдача остаток от деления
let  wholeCountSweet = Math.floor(countSweet );// округление до нижнего целого
alert(`${wholeCountSweet} - количество купленных конфет ${change} - сдача`);
 console.log ( wholeCountSweet, 'штук')
 console.log (change, 'сдача')