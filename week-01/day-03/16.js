'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
function makingMatches(girls, boys) {
    let i = 1;
    boys.forEach((boy) => {
        girls.splice(i, 0, boy);
        i += 2;
    })
    return girls
}

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

console.log(makingMatches(girls, boys));

module.exports = makingMatches;
