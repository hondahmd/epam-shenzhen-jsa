import Printable from "./printable";

class Domino implements Printable {
    public values: number[];

    constructor(valueA, valueB) {
      this.values = [valueA, valueB];
    }

    public toString() {
      return `[${this.values[0]}|${this.values[1]}]`;
    }

    public getFirstValue() {
        return this.values[0];
    }

    public getSecondValue() {
        return this.values[1];
    }

    public printAllFields() {
        console.log(`${this.values[0]} and ${this.values[1]}`);
    }
  }

export default Domino;
