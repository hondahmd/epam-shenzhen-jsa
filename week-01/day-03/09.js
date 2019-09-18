'use strict';

let goods = new Map([
    ["Eggs", 200],
    ["Milk", 200],
    ["Fish", 400],
    ["Apples", 150],
    ["Bread", 50],
    ["Chicken", 550],
]);

console.log(`Scooter says the fish is ${goods.get("Fish")}`);

let expensive = 0;
let expName = '';
let sum = 0;
let below300 = 0;
let E125 = false;
let cheap = goods.values().next().value;
console.log(cheap);
let cheapName = '';

goods.forEach((value, key) => {
    if (value > expensive) {
        expensive = value;
        expName = key;
    }
    if (value < cheap) {
        cheap = value;
        cheapName = key;
    }
    if (value < 300) {
        below300++;
    }
    if (value === 125) {
        E125 = true;
    }
    sum += value;
})

console.log(`Most expensive product: ${expName}`);
console.log(`Average price: ${sum / goods.size}`);
console.log(`${below300} products' price is below 300`);
console.log(E125 ? "There is a product priced as 125" : "There is no product priced as 125");
console.log(`Cheapest product is: ${cheapName}`);