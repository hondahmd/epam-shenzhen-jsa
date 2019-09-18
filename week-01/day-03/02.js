'use strict';

function reverse(input) {
    let out = '';
    for (let i = 0; i < input.length; i++) {
        out += input[input.length - i -1];
    }
    return out;
}
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
console.log(reverse(reversed));

module.exports = reverse;