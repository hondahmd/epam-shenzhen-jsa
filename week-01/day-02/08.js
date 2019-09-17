'use strict';

const lineCount = 7;
let half = Math.round(lineCount / 2);

for (let i = 0; i < half; i++) {
    let line = '';
    for (let j = 0; j < 2 * half - 1; j++) {
        if (j < half - i - 1 || j > half + i - 1) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    console.log(line);
}

half = lineCount - half;

for (let i = half - 1; i >= 0; i--) {
    let line = '';
    if (lineCount % 2 !== 0) {
        line += ' ';
    }
    for (let j = 0; j < 2 * half - 1; j++) {
        if (j < half - i - 1 || j > half + i - 1) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    console.log(line);
}