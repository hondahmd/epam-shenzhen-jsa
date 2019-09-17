'use strict'

const lineCount = 6;
let side = '';
let bar = '';

for (let i = 0; i < lineCount; i++) {
    side += '%';
}
for (let i = 0; i < lineCount; i++) {
    if (i === 0 || i === lineCount - 1) {
        bar += '%';
    } else {
        bar += ' ';
    }
}
for (let i = 0; i < lineCount; i++) {
    if (i === 0 || i === lineCount - 1) {
        console.log(side);
    } else {
        console.log(bar);
    }
}