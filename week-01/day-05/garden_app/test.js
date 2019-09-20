'use strict';

const Plant = require('./plant');
const Flower = require('./flower');
const Tree = require('./tree');
const Garden = require('./garden');

let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');
let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');
let garden = new Garden();

garden.add(yellowFlower);
garden.add(blueFlower);
garden.add(purpleTree);
garden.add(orangeTree);
garden.showAll();
garden.waterAll(40);
garden.showAll();
garden.waterAll(70);
garden.showAll();