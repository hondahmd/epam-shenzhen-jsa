'use strict';

class Station {
    constructor(gasAmount = '10000') {
        this.gasAmount = gasAmount;
    }

    refill(car) {
        if (car.getEmpty() < this.gasAmount) {
            this.gasAmount -= car.getEmpty();
            car.fill(car.getEmpty());
        } else {
            car.fill(this.gasAmount);
        }
    }

    getGasAmount() {
        return this.gasAmount;
    }
}

module.exports = Station;