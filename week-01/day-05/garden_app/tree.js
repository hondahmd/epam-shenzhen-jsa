'use strict';

const Plant = require('./plant');

class Tree extends Plant {
    constructor(color, waterAmount = 0) {
        super(color, 0.4, 10, waterAmount);
    }
}

module.exports = Tree;