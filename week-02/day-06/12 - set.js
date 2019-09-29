function numberSet() {
    this.numbers = [];
}

numberSet.prototype.add = function(number) {
    if (!this.numbers.includes(number)) {this.numbers.push(number);}
}

numberSet.prototype.get = function(index) {
    if (index < this.numbers.length) return this.numbers[index];
    else return 'index too large';
}

let set = new numberSet();
set.add(1);
set.add(2);
console.log(set.get(1));
console.log(set.get(2));