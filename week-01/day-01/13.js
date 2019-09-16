'use strict';

const date = new Date();
const currentHours = date.getHours();
const currentMinutes = date.getMinutes();
const currentSeconds = date.getSeconds();

const totalSeconds = 24 * 60 * 60;
const pastSeconds = currentHours * 3600 + currentMinutes * 60 + currentSeconds;

console.log("Remaining seconds: " + (totalSeconds - pastSeconds));
