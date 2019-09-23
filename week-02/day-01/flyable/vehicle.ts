abstract class Vehicle {
    private name: string;
    private speed: number;
    private weight: number;

    constructor(name: string, speed: number, weight: number) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
    }

    public getName(): string {
        return this.name;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getWeight(): number {
        return this.weight;
    }
}

export default Vehicle;
