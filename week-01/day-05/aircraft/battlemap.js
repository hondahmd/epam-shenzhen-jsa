'use strict';

const Carrier = require('./carrier');
const Aircraft = require('./aircraft');

class BattleMap {
    constructor(bango1, bango2) {
        this.carrier1 = new Carrier(bango1);
        this.carrier2 = new Carrier(bango2);
    }

    prepareAircrafts(carrier, type) {
        for (let i = 0; i < Math.random() * 50 + 1; i++) {
            carrier.add(new Aircraft(type, type === 'F35' ? 12 : 8, type === 'F35' ? 50 : 30));
        }
    }

    prepareCarrier(carrier) {
        carrier.init();
        this.prepareAircrafts(carrier, 'F35');
        this.prepareAircrafts(carrier, 'F16');
    }

    prepareCarriers() {
        this.prepareCarrier(this.carrier1);
        this.prepareCarrier(this.carrier2);
    }

    start() {
        this.prepareCarriers();
        this.carrier1.getStatus();
        this.carrier2.getStatus();
        this.carrier1.fill();
        this.carrier2.fill();
        this.carrier1.fight(this.carrier2);
        this.carrier1.getStatus();
        this.carrier2.getStatus();
    }
}

module.exports = BattleMap;