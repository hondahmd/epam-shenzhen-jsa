'use strict'

const lineCount = 5;

for (let i = 1; i <= lineCount; i++) {
    let stars = '';
    for (let j = 0; j < i; j++) {
        stars += '*';
    }
    console.log(stars);
}