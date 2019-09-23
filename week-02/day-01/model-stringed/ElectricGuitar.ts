import StringedInstrument from "./stringedinstrument";

class ElectricGuitar extends StringedInstrument {
    private soundLike: string;

    constructor(numberOfStrings: number = 6, sound: string = "Twang") {
        super("Electric Guitar", numberOfStrings);
        this.soundLike = sound;
    }

    public sound() {
        console.log(`${this.getName()}, a ${this.getStrings()}-stringed instrument that goes ${this.soundLike}`);
    }
}

export default ElectricGuitar;
