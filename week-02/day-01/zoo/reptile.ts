import Animal from "./animal";

class Reptile extends Animal {
    private breedWay: string;

    constructor(name: string, age: number, food: string, restWay: string, moveWay: string, breedWay: string = "laying eggs") {
        super(name, age, food, restWay, moveWay);
        this.breedWay = breedWay;
    }

    public breed(): string {
        return this.breedWay;
    }

    public warm(): void {
        console.log(`${this.getName()} warms themselves by abosorbing light`);
    }

    public skin(): void {
        console.log(`${this.getName()} has special skin.`);
    }
}

export default Reptile;
