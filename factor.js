function factor(number) {
    let factors = [];
    for(let x = number; x >= 0; x --){
        if (number % x === 0){
            factors.push(x);
        }
    }
    return factors;
}

console.log(factor(8));