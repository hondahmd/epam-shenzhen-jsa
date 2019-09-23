import Flyable from "./flyable";
import Vehicle from "./vehicle";

class Helicopter extends Vehicle implements Flyable {
    constructor(name: string = "Helicopter", speed: number = 80, weight: number = 50000) {
        super(name, speed, weight);
    }

    public land() {
        console.log("Sending landing request...");
    }

    public fly() {
        if (this.getSpeed() > 70) {
            console.log(`ShenZhen Tower, this is SZ${this.getName()}, we are flying over your zone.`);
        } else {
            console.log("May day! May day!");
        }
    }

    public takeOff() {
        console.log(`ShenZhen Tower, CCA${this.getName()} request departure instructions.`);
    }
}
