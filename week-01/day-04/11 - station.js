'use strict';

class Station {
    constructor(gasAmount = '10000') {
        this.gasAmount = gasAmount;
    }

    refill(car) {
        this.gasAmount -= car.getEmpty();
        car.fill();
    }

    getGasAmount() {
        return this.gasAmount;
    }
}

module.exports = Station;