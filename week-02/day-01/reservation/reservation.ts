import Reservationy from "./reservationy";

class Reservation implements Reservationy {
    private numberOfReservations: number;
    private codes: string;
    private days: string[];

    constructor(numberOfReservations: number) {
        this.numberOfReservations = numberOfReservations;
        this.codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.days = ["MON", "TUE", "WES", "THU", "FRI", "SAT", "SUN"];
    }

    public getCodeBooking(): string {
        let code = "";
        for (let i = 0; i < 8; i++) {
            code += this.codes.charAt(Math.floor(Math.random() * this.codes.length));
        }
        return code;
    }

    public getDowBooking(): string {
        return this.days[Math.floor(Math.random() * this.days.length)];
    }

    public generateBooking(): void {
        for (let i = 0; i < 10; i++) {
            console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
        }
    }
}

export default Reservation;
