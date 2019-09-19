'use strict';

const Armada = require('./armada');
const Ship = require('./ship');
const Pirate = require('./pirate');

class WarApp {
    constructor(name1, name2) {
        this.armada1 = [new Armada(), name1];
        this.armada2 = [new Armada(), name2];
    }

    haveWar() {
        this.armada1[0].fillShips();
        this.armada2[0].fillShips();
        console.log(`${this.armada1[1]} has ${this.armada1[0].getShipNumber()} ships`);
        console.log(`${this.armada2[1]} has ${this.armada2[0].getShipNumber()} ships`);
        let result = this.armada1[0].war(this.armada2[0]);
        if (result) {
            console.log(`${this.armada1[1]} won!`);
        } else {
            console.log(`${this.armada2[1]} won!`);
        }
    }
}

let warapp = new WarApp("England", "Poland");

warapp.haveWar();