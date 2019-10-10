'use strict';

const body = document.querySelector('body');
const button = document.querySelector('button');
const words = document.querySelector('h3');
let fiveSecs = false;
let clicks = 0;
console.log(body);

window.addEventListener('load', () => {
    setTimeout(() => {
        fiveSecs = true;
        console.log('5 secs');
    }, 5000);
});

button.addEventListener('click', () => {
    if (!fiveSecs) {clicks = -1};
    if (clicks >= 0) {clicks++};
    if (clicks === 3) {words.removeAttribute('hidden');}
    console.log(fiveSecs);
});
