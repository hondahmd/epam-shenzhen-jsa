'use strict';

const Pirate = require('./pirate');
const Ship = require('./ship');

class BattelApp {
    constructor(ship1, ship2) {
        this.ship1 = [new Ship(), ship1];
        this.ship2 = [new Ship(), ship2];
    }

    battle() {
        this.ship1[0].fillShip();
        console.log(`${this.ship1[1]}:`)
        this.ship1[0].showCrew();
        this.ship2[0].fillShip();
        console.log(`${this.ship2[1]}:`)
        this.ship2[0].showCrew();
        if (this.ship1[0].battle(this.ship2[0])) {
            console.log(`${this.ship1[1]} won!`);
        } else {
            console.log(`${this.ship2[1]} won!`);
        }
        /*
        console.log(`${this.ship1[1]} condition:`);
        this.ship1[0].showCrew();
        console.log(`${this.ship2[1]} condition:`);
        this.ship2[0].showCrew();
        */
    }
}

let battlApp = new BattelApp("BlackPearl", "Udaloy");

battlApp.battle();