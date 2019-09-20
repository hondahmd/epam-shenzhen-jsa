'use strict';

const Carrier = require('./carrier');
const Aircraft = require('./aircraft');

let F35 = new Aircraft('F35', 12, 50);
let F16 = new Aircraft('F16', 8, 30);
let FordClass = new Carrier(Math.round(Math.random() * 10000 + 1), Math.round(Math.random() * 10000 + 1));
let deGaulle = new Carrier(Math.round(Math.random() * 10000 + 1), Math.round(Math.random() * 10000 + 1));

for (let i = 0; i < Math.random() * 50 + 1; i++) {
    F35 = new Aircraft('F35', 12, 50);
    FordClass.add(F35);
}
for (let i = 0; i < Math.random() * 50 + 1; i++) {
    F16 = F16 = new Aircraft('F16', 8, 30);;
    FordClass.add(F16);
}
for (let i = 0; i < Math.random() * 50 + 1; i++) {
    F35 = new Aircraft('F35', 12, 50);
    deGaulle.add(F35);
}
for (let i = 0; i < Math.random() * 50 + 1; i++) {
    F16 = F16 = new Aircraft('F16', 8, 30);
    deGaulle.add(F16);
}
FordClass.getStatus();
deGaulle.getStatus();
FordClass.fill();
deGaulle.fill();
FordClass.fight(deGaulle);
FordClass.getStatus();
deGaulle.getStatus();