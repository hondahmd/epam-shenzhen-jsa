'use strict';

function drawLine(i, half) {
    let line = '';
    for (let j = 0; j < 2 * half - 1; j++) {
        if (j < half - i - 1 || j > half + i - 1) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    return line;
}

const lineCount = 7;
let half = Math.round(lineCount / 2);
let result = new Array(lineCount);

for (let i = 0; i < half; i++) {
    result[i] = drawLine(i, half);
}

for (let i = half - 1; i >= 0; i--) {
    result[lineCount - i - 1] = drawLine(i, half);
}

result.forEach(function(item) {
    console.log(item);
});