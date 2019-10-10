'use strict';

let pressedKey = document.querySelector('h1');

document.addEventListener('keyup', (event) => {
    console.log(event);
    pressedKey.textContent = event.key;
});
