'use strict';

const Item = require('./item');
const Toy = require('./toy');
const Tool = require('./tool');

class Warehouse {
    constructor() {
        this.itemList = [];
    }

    addItem(item) {
        this.itemList.push(item);
    }

    printItemsOfType(type) {
        this.itemList.forEach(item => {
            if (item instanceof type) {
                item.print();
            }
        });
    }
}

module.exports = Warehouse;