import StringedInstrument from './stringedinstrument';

class BassGuitar extends StringedInstrument {
    private soundLike : string;

    constructor(numberOfStrings : number = 4, sound : string = "Duum-duum-duum") {
        super("Bass Guitar", numberOfStrings);
        this.soundLike = sound;
    }

    sound() {
        console.log(`${this.getName()}, a ${this.getStrings()}-stringed instrument that goes ${this.soundLike}`);
    }
}

export default BassGuitar;