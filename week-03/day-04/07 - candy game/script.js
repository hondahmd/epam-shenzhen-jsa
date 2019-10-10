'use strict';

function updateSpeed() {
    if (lolipops.textContent === '') {
        speed.textContent = 0;
    } else {
        speed.textContent = Number(speed.textContent) + Math.floor(lolipops.textContent.length / 20) - Math.floor((lolipops.textContent.length - 1) / 20);
    }
}

let candies = document.querySelector('.candies');
let lolipops = document.querySelector('.lollypops');
let speed = document.querySelector('.speed');
let createCandies = document.querySelector('.create-candies');
let buyLolipops = document.querySelector('.buy-lollypops');
let candyRain = document.querySelector('.candy-machine');

updateSpeed();
createCandies.addEventListener('click', () => {
    candies.textContent++;
});
buyLolipops.addEventListener('click', () => {
    if (candies.textContent > 99) {
        lolipops.textContent += '🍭';
        candies.textContent -= 100;
        updateSpeed();
    }
});
candyRain.addEventListener('click', () => {
    speed.textContent *= 10;
});
setInterval(() => {
    candies.textContent = Number(speed.textContent) + Number(candies.textContent);
}, 1000);
