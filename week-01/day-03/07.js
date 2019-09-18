'use strict'

let myMap = new Map([
    ["978-1-60309-452-8", "A Letter to Jo"],
    ["978-1-60309-459-7", "Lupus"],
    ["978-1-60309-444-3", "Red Panda and Moon Bear"],
    ["978-1-60309-461-0", "The Lab"],
    ["478-0-61159-424-8", ],
]);

myMap.forEach((value, key) => {
    console.log(value + " (ISBN: " + key + ')');
})

myMap.delete("978-1-60309-444-3");

myMap.forEach((value, key) => {
    if (value === "The Lab") {
        myMap.delete(key);
    }
});

myMap.set("978-1-60309-450-4", "They Called Us Enemy");
myMap.set("978-1-60309-453-5", "Why Did We Trust Him?");

console.log(myMap.get("478-0-61159-424-8") !== undefined);

console.log(myMap.get("978-1-60309-453-5"));
