function GardenES5 (width, length) {
    this.width = width;
    this.length = length;
}

GardenES5.prototype.area = function() {
    return this.width * this.length;
}

GardenES5.prototype.circumference = function() {
    return 2 * (this.length + this.width);
}

GardenES5.prototype.efficiency = function() {
    return this.area() / this.circumference();
}

module.exports = GardenES5;
