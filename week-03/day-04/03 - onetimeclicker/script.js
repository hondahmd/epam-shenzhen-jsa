'use strict';

let button = document.querySelector('button');

function logTime() {
    let time = new Date();
    console.log(`Month ${time.getMonth()} Day ${time.getDate()} Hour ${time.getHours()} Minute ${time.getMinutes()} Second ${time.getSeconds()}`);
    button.textContent = 'That\'s it, no more response.';
}

button.addEventListener('click', logTime);
button.addEventListener('click', () => {
    button.removeEventListener('click', logTime);
});
