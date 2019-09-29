class GardenES6 {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    area() {
        return this.width * this.length;
    }
    
    circumference() {
        return 2 * (this.width + this.length);
    }

    efficiency() {
        return this.area() / this.circumference();
    }
}

module.exports = GardenES6;
