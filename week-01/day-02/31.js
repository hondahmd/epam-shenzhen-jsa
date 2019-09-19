'use strict';

const lineCount = 9;

for (let i = 0; i < lineCount; i++) {
    console.log(' '.repeat(lineCount -i -1) + '*'.repeat(2 * (i + 1) - 1));
}