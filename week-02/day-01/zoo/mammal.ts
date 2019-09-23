import Animal from './animal';

class Mammal extends Animal {
    private breedWay: string;

    constructor(name: string, age: number, food: string, restWay: string, moveWay: string, breedWay: string = "pushing miniature versions out") {
        super(name, age, food, restWay, moveWay);
        this.breedWay = breedWay;
    }

    breed(): string {
        return this.breedWay;
    }

    haveFur(): void {
        console.log(`${this.getName()} has fur.`);
    }

    bloodYstem(): void {
        console.log(`${this.getName()} has complex blood system.`);
    }
}

export default Mammal;