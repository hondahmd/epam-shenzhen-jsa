'use strict';

class SharpieSet {
    constructor() {
        this.sharpies = [];
    }

    countUsable() {
        return this.sharpies.filter(sharpie => {
            return sharpie.getInkAmount() > 0;
        }).length;
    }

    removeTrash() {
        this.sharpies = this.sharpies.filter(sharpie => {
            return sharpie.getInkAmount() > 0;
        })
    }

    add(sharpie) {
        this.sharpies.push(sharpie);
    }
}

module.exports = SharpieSet;