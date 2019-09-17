'use strict'

for (let row = 0; row < 8; row++) {
    let line = "%%%%";
    if (row % 2 === 0) {
        line = line + ' ';
    } else {
        line = ' ' + line;
    }
    console.log(line);
}