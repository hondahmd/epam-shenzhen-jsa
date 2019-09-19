'use strict'

class Counter {
    constructor(number = 0) {
        this.number = number;
        this.default = number;
    }

    add(number) {
        this.number += number;
    }

    add() {
        this.number++;
    }

    get() {
        return this.number.toString();
    }

    reset() {
        this.number = this.default;
    }
}