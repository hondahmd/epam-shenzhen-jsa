'use strict';

const Item = require('./item');

class Toy extends Item {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }

    print() {
        console.log(`${this.color} ${this.name} - ${this.price}`);
    }
}

module.exports = Toy;
