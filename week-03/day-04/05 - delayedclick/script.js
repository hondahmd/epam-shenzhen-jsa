'use strict';

let button = document.querySelector('button');
let words = document.querySelector('h3');

button.addEventListener('click', () => {
    setTimeout(() => {
        words.removeAttribute('hidden');
    }, 2000);
})
