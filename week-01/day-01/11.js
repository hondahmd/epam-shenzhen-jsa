'use strict';

let a = 3;
a += 10;

console.log(a);

let b = 100;
b -= 7;

console.log(b);

let c = 44;
c *= c;

console.log(c);

let d = 125;
d /= 5;

console.log(d);

let e = 8;
e = Math.pow(e, 3);

console.log(e);

const f1 = 123;
const f2 = 345;
console.log(f1 > f2);

const g1 = 350;
const g2 = 200;
console.log(g2 * g2 > g1);


const h = 1357988018575474;
console.log((h % 11) === 0)

const i1 = 10;
const i2 = 3;
console.log((i1 > i2 * i2) && (i1 < i2 * i2 *i2));

const j = 1521;
console.log(!(j % 3) || !(j % 5));

let k = 'Apple';
k += k + k + k;

console.log(k);
