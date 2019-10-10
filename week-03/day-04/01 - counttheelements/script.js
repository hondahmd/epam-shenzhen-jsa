'use strict';

let list = document.querySelectorAll('li');
let button = document.querySelector('button');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
    result.textContent = list.length;
})