function getPrimeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        divisor++;
        
        if (divisor * divisor > n && n > 1) {
            factors.push(n);
            break;
        }
    }

    return factors;
}


const number = 18;
const factors = getPrimeFactors(number);
console.log(factors); 