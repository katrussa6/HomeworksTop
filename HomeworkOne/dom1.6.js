const USD = 103.44;
const EUR = 108.50;
let dollarInput = prompt ("введите количество долларов");
let euroInDollar = dollarInput/USD;
let euroInDollarConverter = dollarInput*euroInDollar;
alert(`${euroInDollarConverter} EUR`);
