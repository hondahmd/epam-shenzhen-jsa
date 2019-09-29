const GardenES5 = require('./ES5');
const GardenES6 = require('./ES6');

let gardenES5 = new GardenES5(5, 10);
console.log(gardenES5.efficiency());
let gardenES6 = new GardenES6(5, 10);
console.log(gardenES6.efficiency());