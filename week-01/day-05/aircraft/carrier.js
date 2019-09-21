'use strict';

class Carrier {
    constructor(bango) {
        this.ammo = 0;
        this.health = 0;
        this.aircrafts = [];
        this.bango = bango;
        this.makeDamage = 0;
    }

    add(aircraft) {
        if (aircraft.getPriority()) {
            this.aircrafts.unshift(aircraft);
        } else {
            this.aircrafts.push(aircraft);
        }

    }

    init() {
        this.ammo = Math.round(Math.random() * 10000 + 1);
        this.health = Math.round(Math.random() * 10000 + 1);
    }

    fill() {
        try {
            if (this.ammo <= 0) {
                throw "no Ammo!";
            }
        } catch(error) {
            console.log(error);
        }
        this.aircrafts.forEach(aircraft => {
            if (this.ammo > 0) {
                this.ammo = aircraft.refill(this.ammo);
            }
        })
    }

    getDamage() {
        return this.makeDamage;
    }

    fight(carrier) {
        this.aircrafts.forEach(aircaft => {
            this.makeDamage += aircaft.fight();
        })
        carrier.aircrafts.forEach(aircaft => {
            carrier.makeDamage += aircaft.fight();
        })
        this.health -= carrier.getDamage();
        carrier.health -= this.getDamage();
    }

    getStatus() {
        console.log(`HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammo}, Total Damage: ${this.getDamage()}`);
        console.log("Aircrafts:");
        this.aircrafts.forEach(aircraft => {
            console.log(aircraft.getStatus());
        })
        if (this.health <= 0) {
            console.log("It's dead Jim :(");
        }
    }
}

module.exports = Carrier;