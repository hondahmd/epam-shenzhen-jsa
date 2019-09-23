import Animal from "./animal";

class Bird extends Animal {
    private breedWay: string;

    constructor(name: string, age: number, food: string, restWay: string, moveWay: string, breedWay: string = "laying eggs") {
        super(name, age, food, restWay, moveWay);
        this.breedWay = breedWay;
    }

    public breed(): string {
        return this.breedWay;
    }

    public fly(): void {
        console.log(`${this.getName()} is flying.`);
    }

    public haveWings(): void {
        console.log(`${this.getName()} has wings.`);
    }
}

export default Bird;
