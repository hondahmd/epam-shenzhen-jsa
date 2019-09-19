'use strict';

let lineCount = 6;

for (let i = 0; i < lineCount; i++) {
    if (i === 0 || i === lineCount - 1) {
        console.log('%'.repeat(lineCount));
    } else {
        console.log('%' + ' '.repeat(lineCount - 2) + '%');
    }
}