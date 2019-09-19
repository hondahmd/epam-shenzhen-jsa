'use strict';

const Pirate = require('./pirate');

class Ship {
    constructor(name) {
        this.pirates = [];
        this.captain = 0;
        this.name = name;
    }

    fillShip() {
        this.captain = new Pirate();
        for (let i = 0; i < Math.round(Math.random() * 500 + 1); i++) {
            this.pirates.push(new Pirate());
        }
    }

    getAliveNumber() {
        let alive = this.pirates.filter(pirate => {
            return !pirate.getDead();
        });
        return alive.length;
    }

    getShipName() {
        return this.name;
    }

    showCrew() {
        let captainWine = this.captain.getWine();
        let captainAsleep = this.captain.getAsleep() ? "Captain's not asleep." : "Captain's asleep.";
        let captainDead = this.captain.getDead() ? "Captain's dead." : "Captain's alive.";
        console.log(`Captain had ${captainWine} rum. ${captainAsleep} ${captainDead}`);
        console.log(`${this.getAliveNumber()} pirates are alive!`);
    }

    battle(ship) {
        let result = (this.getAliveNumber() - this.captain.getWine()) - (ship.getAliveNumber() - ship.captain.getWine());
        if (result >= 0) {
            this.party();
            ship.loss();
            return true;
        } else {
            this.loss();
            ship.party();
            return false;
        }
    }

    party() {
        this.captain.partyRum();
        this.pirates.forEach(pirate => {
            pirate.partyRum();
        })
    }

    loss() {
        for (let i = 0; i < Math.round(Math.random() * this.getAliveNumber() + 1); i++) {
            this.pirates[i].die();
        }
    }
}

module.exports = Ship;