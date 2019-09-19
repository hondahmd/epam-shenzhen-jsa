'use strict';

function containsSeven(input) {
    return(input.indexOf(7) === -1 ? "Noooooo" : "Hoorray");
}

const numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));

module.exports = containsSeven;