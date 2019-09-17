'use strict';

let matrix = [];
let size = 4;

for (let row = 0; row < size; row++) {
    matrix[row] = new Array(size);
    for (let col = 0; col < size; col++) {
        if (row + col === 3) {
            matrix[row][col] = 1;
        } else {
            matrix[row][col] = 0;
        }
    }
    console.log(matrix[row]);
}

console.log(matrix);