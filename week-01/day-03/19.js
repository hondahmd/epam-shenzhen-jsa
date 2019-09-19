'use strict';

function containsSeven(input) {
    return(input.indexOf(7) === -1 ? "Noooooo" : "Hoorray");
}

function byBinarySearch(input) {
    input.sort();
    let left = 0;
    let right = input.length - 1;
    while (right > left) {
        if (input[right] > 7) {
            right = right / 2;
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));

module.exports = containsSeven;