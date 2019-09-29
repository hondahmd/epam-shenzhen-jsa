function coffeeES5(sugar, milk) {
    if (sugar === undefined) {sugar = false;}
    if (milk === undefined) {milk = false;}
    if (sugar && milk) {
        return 'coffee with sugar and with milk';
    } else if (!sugar && milk) {
        return 'coffee with milk';
    } else if (sugar && !milk) {
        return 'coffee with sugar';
    } else {
        return 'coffee';
    }
}

function coffeeES6(sugar = false, milk = false) {
    if (sugar && milk) {
        return 'coffee with sugar and with milk';
    } else if (!sugar && milk) {
        return 'coffee with milk';
    } else if (sugar && !milk) {
        return 'coffee with sugar';
    } else {
        return 'coffee';
    }
}

var sugar = true;

console.log(coffeeES5(sugar));
console.log(coffeeES6(sugar));