function maxDigit (number){
    const string = String(number)
    if(string.length ===1){
        return string
    }

    const firstDigit = string[0]
    const remaindDigit =string.slice(1)
    const maxRemain =maxDigit(remaindDigit)

    return Math.max(+firstDigit, +maxRemain)
}
console.log(maxDigit(879)) //3е задание где рекурсии 