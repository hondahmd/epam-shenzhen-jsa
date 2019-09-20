'use strict';

const Armada = require('./armada');
const Ship = require('./ship');
const Pirate = require('./pirate');

class WarApp {
    constructor(name1, name2) {
        this.armada1 = new Armada(name1);
        this.armada2 = new Armada(name2);
    }

    prepareArmada(armada) {
        armada.fillShips();
        console.log(`${armada.getArmadaName()} has ${armada.getShipNumber()} ships`);
        return armada;
    }

    haveWar() {
        let armada1 = this.prepareArmada(this.armada1);
        let armada2 = this.prepareArmada(this.armada2);
        if (armada1.war(armada2)) {
            console.log(`${this.armada1.getArmadaName()} won!`);
        } else {
            console.log(`${this.armada2.getArmadaName()} won!`);
        }
    }
}

let warapp = new WarApp("England", "Poland");

warapp.haveWar();