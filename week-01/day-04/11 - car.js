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

    fill() {
        this.gasAmount = this.capacity;
    }
}

module.exports = Car;