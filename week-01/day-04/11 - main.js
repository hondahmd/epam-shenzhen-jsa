'use strict'

const Car = require('./11 - car');
const Station = require('./11 - station');

let honda = new Car();
let station = new Station();

console.log(`The car currently has ${honda.getGasAmount()} gas`);
console.log(`The station currently has ${station.getGasAmount()} gas`);
station.refill(honda);
console.log(`The car currently has ${honda.getGasAmount()} gas`);
console.log(`The station currently has ${station.getGasAmount()} gas`);