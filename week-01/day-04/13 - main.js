'use strict';

const Animal = require('./03');
const Farm = require('./13 - farm');

let a1 = new Animal(99);
let a2 = new Animal(1);
let a3 = new Animal(50);
let a4 = new Animal(66);
let a5 = new Animal(77);
let a6 = new Animal(33);
let farm = new Farm();

farm.breed(a1);
farm.breed(a2);
farm.breed(a3);
farm.breed(a4);
farm.breed(a5);
farm.breed(a6);
console.log(farm);
farm.slaughter();
console.log(farm);