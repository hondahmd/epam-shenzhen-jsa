const PlaygroundES5 = require('./ES5');
const PlaygroundES6 = require('./ES6');

var playgroundES5 = new PlaygroundES5(10, 10);
const playgroundES6 = new PlaygroundES6(10 ,10);

console.log(playgroundES5.efficiency());
console.log(playgroundES6.efficiency());
playgroundES5.add('elephant');
playgroundES6.add('elephant');
console.log(playgroundES5.toys);
console.log(playgroundES6.toys);