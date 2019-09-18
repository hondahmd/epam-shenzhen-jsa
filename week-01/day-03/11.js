'use strict';

let goods = new Map([
    ["Milk", 1.07],
    ["Rice", 1.59],
    ["Eggs", 3.14],
    ["Cheese", 12.60],
    ["Chicken Breasts", 9.40],
    ["Apples", 2.31],
    ["Tomato", 2.58],
    ["Potato", 1.75],
    ["Onion", 1.10],
]);
let buy = new Map();
buy.set("Milk", new Map([["Bob", 3], ["Alice", 0]]));
buy.set("Rice", new Map([["Bob", 2], ["Alice", 1]]));
buy.set("Eggs", new Map([["Bob", 2], ["Alice", 5]]));
buy.set("Cheese", new Map([["Bob", 1], ["Alice", 0]]));
buy.set("Chicken Breasts", new Map([["Bob", 4], ["Alice", 2]]));
buy.set("Apples", new Map([["Bob", 1], ["Alice", 1]]));
buy.set("Tomato", new Map([["Bob", 2], ["Alice", 10]]));
buy.set("Potato", new Map([["Bob", 1], ["Alice", 0]]));
buy.set("Onion", new Map([["Bob", 0], ["Alice", 0]]));

let BobPay = 0;
let AlicePay = 0;
let BobPrd = 0;
let AlicePrd = 0;
let BobPic = 0;
let AlicePic = 0;

buy.forEach((value, key) => {
    let price = goods.get(key);
    let BobBuy = value.get("Bob");
    if (BobBuy !== 0) {
        BobPay += BobBuy * price;
        BobPrd++;
        BobPic += BobBuy;
    }
    let AliceBuy = value.get("Alice");
    if (AliceBuy !== 0) {
        AlicePay += AliceBuy * price;
        AlicePrd++;
        AlicePic += AliceBuy;
    }
})

let riceBuy = buy.get("Rice");
let potatoBuy = buy.get("Potato");
console.log(`Bob pays ${BobPay}`);
console.log(`Alice pays ${AlicePay}`);
console.log(`${riceBuy.get("Bob") > riceBuy.get("Alice") ? "Bob" : "Alice"} buys more rice`);
console.log(`${potatoBuy.get("Bob") > potatoBuy.get("Alice") ? "Bob" : "Alice"} buys more potato`);
console.log(`${BobPrd > AlicePrd ? "Bob" : "Alice"} buys more different products`);
console.log(`${BobPic > AlicePic ? "Bob" : "Alice"} buys more products`);