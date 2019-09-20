'use strict';

const Pirate = require('./pirate');
const Ship = require('./ship');

class BattelApp {
    constructor(ship1, ship2) {
        this.ship1 = new Ship(ship1);
        this.ship2 = new Ship(ship2);
    }

    prepareShip(ship) {
        ship.fillShip();
        console.log(`${ship.getShipName()}:`);
        ship.showCrew();
        return ship;
    }

    battle() {
        let ship1 = this.prepareShip(this.ship1);
        let ship2 = this.prepareShip(this.ship2);
        if (ship1.battle(ship2)) {
            console.log(`${ship1.getShipName()} won!`);
        } else {
            console.log(`${ship2.getShipName()} won!`);
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