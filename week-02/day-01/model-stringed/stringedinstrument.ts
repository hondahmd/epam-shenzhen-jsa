import Instrument from "./instrument";

abstract class StringedInstrument extends Instrument {
    private numberOfStrings: number;

    constructor(name: string, numberOfStrings: number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    public abstract sound();

    public getStrings(): number {
        return this.numberOfStrings;
    }

    public play() {
        this.sound();
    }
}

export default StringedInstrument;
