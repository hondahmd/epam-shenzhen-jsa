'use strict';

const Plant = require('./plant');

class Tree extends Plant {
    constructor(color, waterAmount = 0) {
        super(color, 0.4, 10, waterAmount);
    }

    harvest() {
        console.log("The tree can be harvested now.");
    }
}

module.exports = Tree;