'use strict'

function printer() {
    let result = '';
    for (let i = 0; i < arguments.length; i++) {
        result += `${arguments[i]} `;
    }
    console.log(result);
}

printer('1','2','3');