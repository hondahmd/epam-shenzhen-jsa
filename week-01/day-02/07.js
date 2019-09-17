'use strict';

const lineCount = 9;

for (let i = 0; i < lineCount; i++) {
    let line = '';
    for (let j = 0; j < 2 * lineCount - 1; j++) {
        if (j < lineCount - i - 1 || j > lineCount + i - 1) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    console.log(line);
}