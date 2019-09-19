'use strict';

const lineCount = 7;
let half = lineCount / 2;

for (let i = 0; i < lineCount; i++) {
    if (i < half) {
        console.log(' '.repeat(Math.round(half) -i -1) + '*'.repeat(2 * (i + 1) - 1));
    } else {
        console.log(' '.repeat(i - Math.floor(half)) + '*'.repeat(2 * (lineCount - i) - 1));
    }
}