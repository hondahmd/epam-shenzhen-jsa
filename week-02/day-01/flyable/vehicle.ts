abstract class Vehicle {
    private name: string;
    private speed: number;
    private weight: number;

    constructor(name: string, speed: number, weight: number) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
    }

    getName(): string {
        return this.name;
    }

    getSpeed(): number {
        return this.speed;
    }

    getWeight(): number {
        return this.weight;
    }
} 

export default Vehicle;