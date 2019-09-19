'use strict';

const Pirate = require('./pirate');
const Ship = require('./ship');

class BattelApp {
    constructor(ship1, ship2) {
        this.ship1 = new Ship(ship1);
        this.ship2 = new Ship(ship2);
    }

    battle() {
        this.ship1.fillShip();
        console.log(`${this.ship1.getShipName()}:`)
        this.ship1.showCrew();
        this.ship2.fillShip();
        console.log(`${this.ship2.getShipName()}:`)
        this.ship2.showCrew();
        if (this.ship1.battle(this.ship2)) {
            console.log(`${this.ship1.getShipName()} won!`);
        } else {
            console.log(`${this.ship2.getShipName()} won!`);
        }
        /*
        console.log(`${this.ship1.getShipName()} condition:`);
        this.ship1.showCrew();
        console.log(`${this.ship2.getShipName()} condition:`);
        this.ship2.showCrew();
        */
    }
}

let battlApp = new BattelApp("BlackPearl", "Udaloy");

battlApp.battle();