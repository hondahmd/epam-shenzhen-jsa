'use strict'

function factorio(input) {
    if (input < 0 || input !== Math.round(input)) {
        console.log("invalid input, exit...");
        return 'invalid';
    }
    if (input === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= input; i++) {
        result *= i;
    }
    return result;
}

let num = 5;
console.log(factorio(num));
console.log(factorio(0));