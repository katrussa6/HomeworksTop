function getFibonacciNumber(n) {
    if (n <= 0) {
        return null; 
    }
    if (n === 1 || n === 2) {
        return 1;
    }

    let prev = 1; 
    let curr = 1; 
    let next;

    for (let i = 3; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

console.log(getFibonacciNumber(3)); 
console.log(getFibonacciNumber(6)); 
console.log(getFibonacciNumber(10)); 