'use strict';

class Farm {
    constructor(slots = '5') {
        this.animals = [];
        this.slots = slots;
    }

    breed(animal) {
        if (this.slots > 0) {
            this.animals.push(animal);
            this.slots--;
        } else {
            console.log("No enough space!");
        }
    }

    slaughter() {
        let leastHungry = 0;
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].getHunger() < this.animals[leastHungry].getHunger()) {
                leastHungry = i;
            }
        }
        this.animals.splice(leastHungry, 1);
    }
}

module.exports = Farm;