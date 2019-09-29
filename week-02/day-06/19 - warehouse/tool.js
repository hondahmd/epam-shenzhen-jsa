'use strict';

const Item = require('./item');

class Tool extends Item {
    constructor(name ,price) {
        super(name, price);
        this.con = 'good';
    }

    set condition(con) {
        this.con = con;
    }

    print() {
        console.log(`${this.con} ${this.name} - ${this.price}`);
    }
}

module.exports = Tool;
