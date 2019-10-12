'use strict';

const button = document.querySelector('button');
const loadTime = document.querySelector('.load-time');
const timeCount = document.querySelector('.time-count');
const time = new Date();

const firstMilli = time.getTime();
const firstTime = `${time.toDateString()} ${time.toTimeString()}`;
loadTime.textContent = `Script loaded at ${firstTime}`;

// first solution
/*
button.addEventListener('click', () => {
    let time = new Date();
    timeCount.textContent = (time.getTime() - firstMilli) / 1000;
});
*/

// second solution
/*
function promiseClick(button) {
    new Promise((resolve, reject) => {
        button.onclick = () => {
            let time = new Date();
            resolve(((time.getTime() - firstMilli) / 1000).toFixed(2));
        }
    }).then(result => {
        timeCount.textContent = result;
    });
}

promiseClick(button);
*/

// third solution
async function asyncClick(button) {
    let result = await new Promise((resolve, reject) => {
        button.onclick = () => {
            let time = new Date();
            resolve(((time.getTime() - firstMilli) / 1000).toFixed(2));
        }
    });
    timeCount.textContent = result;
}

asyncClick(button);
