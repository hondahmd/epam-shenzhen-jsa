'use strict';

function Surface(a, b, c) {
    return 2 * (a * b + a * c + b * c);
}

function Volume(a, b, c) {
    return a * b *c;
}

let length = 5.0;
let width = 6.0;
let height = 7.0;

console.log(Surface(length, width, height));
console.log(Volume(length, width, height));