import StringedInstrument from "./stringedinstrument";

class Violin extends StringedInstrument {
    private soundLike: string;

    constructor(numberOfStrings: number = 4, sound: string = "Screech") {
        super("Violin", numberOfStrings);
        this.soundLike = sound;
    }

    public sound() {
        console.log(`${this.getName()}, a ${this.getStrings()}-stringed instrument that goes ${this.soundLike}`);
    }
}

export default Violin;
