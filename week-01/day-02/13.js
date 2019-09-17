'use strict'

function greet(input) {
    if (input === undefined) {
        console.log("no input, printing default");
        console.log("Greetings, al");
    } else {
        console.log(`Greetings, dear ${input}`);
    }
}

let al = 'EPAM';
greet(al);
greet();