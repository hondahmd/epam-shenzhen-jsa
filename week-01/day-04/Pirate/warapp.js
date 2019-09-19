'use strict';

const Armada = require('./armada');
const Ship = require('./ship');
const Pirate = require('./pirate');

class WarApp {
    constructor(name1, name2) {
        this.armada1 = new Armada(name1);
        this.armada2 = new Armada(name2);
    }

    haveWar() {
        this.armada1.fillShips();
        this.armada2.fillShips();
        console.log(`${this.armada1.getArmadaName()} has ${this.armada1.getShipNumber()} ships`);
        console.log(`${this.armada2.getArmadaName()} has ${this.armada2.getShipNumber()} ships`);
        let result = this.armada1.war(this.armada2);
        if (result) {
            console.log(`${this.armada1.getArmadaName()} won!`);
        } else {
            console.log(`${this.armada2.getArmadaName()} won!`);
        }
    }
}

let warapp = new WarApp("England", "Poland");

warapp.haveWar();