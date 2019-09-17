'use strict'

let abc = ['Arthur', 'Boe', 'Chloe'];
let tmp = abc[0];
abc[0] = abc[2];
abc[2] = tmp;

console.log(abc);