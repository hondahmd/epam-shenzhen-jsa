'use strict';

const button = document.querySelector('button');

const counter = setTimeout(() => {
    alert('5 seconds passed!');
}, 5000);

// first solution
/*
button.addEventListener('click', () => clearTimeout(counter));
*/

// second solution
/*
function promiseClear(button) {
    new Promise((resolve, reject) => {
        button.onclick = () => {
            resolve(1);
        }
    }).then(result => {
        if (result === 1) clearTimeout(counter);
    });
}

promiseClear(button);
*/

// third solution
async function asyncClear(button) {
    let result = await new Promise((resolve, reject) => {
        button.onclick = () => {
            resolve(1);
        }
    });
    if (result === 1) clearTimeout(counter);
}

asyncClear(button);
