'use strict';

class SharpieSet {
    constructor() {
        this.sharpies = [];
    }

    countUsable() {
        let usable = this.sharpies.filter(sharpie => {
            return sharpie.getInkAmount() > 0;
        })
        return usable.length;
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