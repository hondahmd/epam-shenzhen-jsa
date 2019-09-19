'use strict';

class Animal {
    constructor(hunger = '50', thirst = '50') {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    checkAlive() {
        if (this.hunger > 100 || this.thirst > 100) {
            console.log("It died because of playing too much.");
        }
        if (this.hunger < 1) {
            console.log("It died because of eating too mech.");
        }
        if (this.thirst < 1) {
            console.log("It died because of drinking too much.");
        }
    }

    eat() {
        this.hunger--;
        this.checkAlive();
    }

    drink() {
        this.thirst--;
        this.checkAlive();
    }

    play() {
        this.hunger++;
        this.checkAlive();
        this.thirst++;
        this.checkAlive();
    }

    getHunger() {
        return this.hunger;
    }

    getThirst() {
        return this.thirst;
    }
}

module.exports = Animal;