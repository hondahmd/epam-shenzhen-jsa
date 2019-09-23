abstract class Animal {
    private name: string;
    private age: number;
    private food: string;
    private restWay: string;
    private moveWay: string;

    constructor(name: string, age: number, food: string, restWay: string, moveWay: string) {
        this.name = name;
        this.age = age;
        this.food = food;
        this.restWay = restWay;
        this.moveWay = moveWay;
    }

    public getName(): string {
        return this.name;
    }

    public eat(): void {
        console.log(`${this.name} eats ${this.food}.`);
    }

    public rest(): void {
        console.log(`${this.name} rests in a ${this.restWay} way.`);
    }

    public move(): void {
        console.log(`${this.name} moves in a ${this.moveWay} way.`);
    }

    public abstract breed(): string;
}

export default Animal;
