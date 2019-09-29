const GardenES6 = require('../02 - classes/ES6');

class PlayGroundES6 extends GardenES6 {
    constructor(width, length) {
        super(width, length);
        this.toys = [];
    }

    add(toy) {
        this.toys.push(toy);
    }
}

module.exports = PlayGroundES6;