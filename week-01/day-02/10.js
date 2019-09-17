'use strict'

const lineCount = 6;
let side = '';

for (let i = 0; i < lineCount; i++) {
    side += '%';
}
console.log(side);

for (let i = 1; i < lineCount - 1; i++) {
    let line = '%';
    for (let j = 1; j < lineCount - 1; j++) {
        if (i === j) {
            line += '%';
        } else {
            line += ' ';
        }
    }
    line += '%';
    console.log(line);
}

console.log(side);