'use strict';

function appendA(array) {
    array.forEach((_, index) => {
        array[index] += 'a';
    })
    return array;
}

let far = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

console.log(appendA(far));
module.exports = appendA;