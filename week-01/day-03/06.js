'use strict';

let myMap = new Map();

console.log(myMap.size === 0);

myMap.set(97, 'a');
myMap.set(98, 'b');
myMap.set(99, 'c');
myMap.set(65, 'A');
myMap.set(66, 'B');
myMap.set(67, 'C');

myMap.forEach((_, key) => {
    console.log(key);
})

myMap.forEach((value) => {
    console.log(value);
})

myMap.set(68, 'D');

console.log(myMap.size);

console.log(myMap.get(99));

myMap.delete(97);

console.log(myMap.has(100));

myMap.clear();