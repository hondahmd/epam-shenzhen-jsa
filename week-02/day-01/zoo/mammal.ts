import Animal from "./animal";

class Mammal extends Animal {
    private breedWay: string;

    constructor(name: string, age: number, food: string, restWay: string, moveWay: string, breedWay: string = "pushing miniature versions out") {
        super(name, age, food, restWay, moveWay);
        this.breedWay = breedWay;
    }

    public breed(): string {
        return this.breedWay;
    }

    public haveFur(): void {
        console.log(`${this.getName()} has fur.`);
    }

    public bloodYstem(): void {
        console.log(`${this.getName()} has complex blood system.`);
    }
}

export default Mammal;
