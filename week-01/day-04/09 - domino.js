'use strict';

class Domino {
    constructor(valueA, valueB) {
      this.values = [valueA, valueB];
    }
  
    toString() {
      return `[${this.values[0]}|${this.values[1]}]`;
    }

    getFirstValue() {
        return this.values[0];
    }

    getSecondValue() {
        return this.values[1];
    }
  }
  
  module.exports = Domino;