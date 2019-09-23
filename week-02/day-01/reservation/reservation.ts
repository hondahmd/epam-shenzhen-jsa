import Reservationy from "./reservationy";

class Reservation implements Reservationy {
    private numberOfReservations: number;
    private codes: string;
    private codeLength: number;
    private days: string[];
    private bookingNumber: number;

    constructor(numberOfReservations: number, codeLength: number = 8, bookingNumber: number = 10) {
        this.numberOfReservations = numberOfReservations;
        this.codeLength = codeLength;
        this.codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.days = ["MON", "TUE", "WES", "THU", "FRI", "SAT", "SUN"];
        this.bookingNumber = bookingNumber;
    }

    public getCodeBooking(): string {
        let code = "";
        for (let i = 0; i < this.codeLength; i++) {
            code += this.codes.charAt(Math.floor(Math.random() * this.codes.length));
        }
        return code;
    }

    public getDowBooking(): string {
        return this.days[Math.floor(Math.random() * this.days.length)];
    }

    public generateBooking(): void {
        for (let i = 0; i < this.bookingNumber; i++) {
            console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
        }
    }
}

export default Reservation;
