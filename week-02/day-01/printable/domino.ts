import Printable from './printable';

class Domino implements Printable{
    values: number[];

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

    printAllFields() {
        console.log(`${this.values[0]} and ${this.values[1]}`);
    }
  }
  
export default Domino;