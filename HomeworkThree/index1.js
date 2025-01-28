 let NumberOne = prompt("Введите первое число","")
 let NumberTwo = prompt("Введите второе число","")
 
 let n = 0
 function compareNumOne(n){
     if (NumberOne < NumberTwo ) 
        return -1
    
        if (NumberOne > NumberTwo) 
           return 1
        
    
        if (NumberOne == NumberTwo) 
           return 0

 
 }
alert( compareNumOne(n) );
 
