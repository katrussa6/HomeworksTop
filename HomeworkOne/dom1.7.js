const MB = 820;
const GB = 1024;
const result = GB/MB;
let UserGB = prompt ("введите объем флешки в ГБ ");
let UserRezult = result*UserGB;
let wholeUserRezult = Math.floor(UserRezult);
alert(`${wholeUserRezult} - столько файлов размером в 820 Мб помещается на флешку`);
