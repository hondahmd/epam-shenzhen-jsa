abstract class Instrument {
    private instrument: string;

    constructor(name: string) {
        this.instrument = name;
    }

    public abstract play();

    public getName(): string {
        return this.instrument;
    }
}

export default Instrument;
