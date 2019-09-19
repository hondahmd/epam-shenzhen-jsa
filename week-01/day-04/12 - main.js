'use strict';

const Sharpie = require('./04');
const SharpieSet = require('./12 - sharpieset');

let sharpie1 = new Sharpie(100, 'orange', 0.5);
let sharpie2 = new Sharpie(0, 'pink', 0.5);
let sharpieset = new SharpieSet();

sharpieset.add(sharpie1);
sharpieset.add(sharpie2);
console.log(sharpieset);
console.log(sharpieset.countUsable());
sharpieset.removeTrash();
console.log(sharpieset);