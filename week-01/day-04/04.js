'use strict'

class Sharpie {
    constructor(inkAmount = 100, color, width) {
        this.inkAmount = inkAmount;
        this.color = color;
        this.width = width;
    }

    use() {
        this.inkAmount--;
    }

    getInkAmount() {
        return this.inkAmount;
    }
}

module.exports = Sharpie;