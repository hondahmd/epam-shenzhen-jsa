const Garden = require('../02 - classes/ES5');

function PlaygroundES5(width, length) {
    Garden.call(this, width, length);
    this.toys = [];
}

PlaygroundES5.prototype = Object.create(Garden.prototype);
PlaygroundES5.prototype.constructor = PlaygroundES5;
PlaygroundES5.prototype.add = function(toy) {
    this.toys.push(toy);
};

module.exports = PlaygroundES5;
