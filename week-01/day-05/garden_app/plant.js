'use strict';

class Plant {
    constructor(color, absorbRate, waterLimit, waterAmount = 0) {
        this.color = color;
        this.waterAmount = waterAmount;
        this.waterLimit = waterLimit;
        this.absorbRate = absorbRate;
    }

    needWater() {
        return this.waterAmount < this.waterLimit;
    }

    water(amount) {
        this.waterAmount += amount * this.absorbRate;
    }
}

module.exports = Plant;