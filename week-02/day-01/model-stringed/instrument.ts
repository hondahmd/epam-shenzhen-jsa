abstract class Instrument {
    private instrument: string;
    
    constructor(name : string) {
        this.instrument = name;
    }

    abstract play();

    getName(): string {
        return this.instrument;
    }
}

export default Instrument;