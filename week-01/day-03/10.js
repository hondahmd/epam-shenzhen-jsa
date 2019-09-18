'use strict';

let goods = new Map([
    ["Eggs", 200],
    ["Milk", 200],
    ["Fish", 400],
    ["Apples", 150],
    ["Bread", 50],
    ["Chicken", 550],
]);

let less201 = new Array();
let more150 = new Array();

goods.forEach((value, key) => {
    if (value < 201) {
        less201.push(key);
    }
    if (value > 150) {
        more150.push([key, value]);
    }
})

console.log(less201);
console.log(more150);