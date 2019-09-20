'use strict';

const Domino = require('./09 - domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();

let cardMap = new Map();
dominoes.forEach((value, index) => {
    cardMap.set(value.getFirstValue(), index);
})
let index = 1;
while (index !== dominoes.length) {
    let next = cardMap.get(dominoes[index - 1].getSecondValue());
    if (next !== index) {
        cardMap.set(dominoes[index].getFirstValue(), next);
        cardMap.set(dominoes[next].getFirstValue(), index);
        let tmp = dominoes[index];
        dominoes[index] = dominoes[next];
        dominoes[next] = tmp;
    }
    index++;
}

console.log(dominoes.toString());