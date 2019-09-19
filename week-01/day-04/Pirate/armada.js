'use strict';

const Ship = require('./ship');
const Pirate = require('./pirate');

class Armada {
    constructor() {
        this.ships = [];
    }

    getShipNumber() {
        return this.ships.length;
    }

    getNthShip(index) {
        return this.ships[index];
    }

    fillShips() {
        for (let i = 0; i < Math.round(Math.random() * 500 + 1); i++) {
            let ship = new Ship();
            ship.fillShip();
            this.ships.push(ship);
        }
    }

    war(armada) {
        let count1 = 0;
        let count2 = 0;
        while (count1 < this.getShipNumber() && count2 < armada.getShipNumber()) {
            let ship1 = this.getNthShip(count1);
            let ship2 = armada.getNthShip(count2);
            let result = ship1.battle(ship2);
            if (result) {
                count2++;
            } else {
                count1++;
            }
        }
        if (count2 === armada.getShipNumber()) {
            return true;
        }
        if (count1 === this.getShipNumber()) {
            return false;
        }
    }
}

module.exports = Armada;