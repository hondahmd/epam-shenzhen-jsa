import Instrument from './instrument';

abstract class StringedInstrument extends Instrument {
    private numberOfStrings: number;

    constructor(name : string, numberOfStrings : number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    abstract sound();

    getStrings(): number {
        return this.numberOfStrings;
    }

    play() {
        this.sound();
    }
}

export default StringedInstrument;