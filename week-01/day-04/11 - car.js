'use strict';

class Car {
    constructor(capacity = '100', gasAmount = '50') {
        this.capacity = capacity;
        this.gasAmount = gasAmount;
    }

    getCapacity() {
        return this.capacity;
    }

    getGasAmount() {
        return this.gasAmount;
    }
    
    getEmpty() {
        return this.capacity - this.gasAmount;
    }

    fill(number) {
        this.gasAmount += number;
    }
}

module.exports = Car;