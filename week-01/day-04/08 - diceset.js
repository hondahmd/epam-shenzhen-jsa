'use strict';

class DiceSet {

  constructor() {
    this.numOfDices = 6;
  }

  roll() {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index) {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index) {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }
  }
}

const diceSet = new DiceSet();
console.log(diceSet.roll());
console.log(diceSet.getCurrent());

console.log('------------------');

let sixNumber = 0;
let currentSet = diceSet.getCurrent();
while (sixNumber !== currentSet.length) {
  sixNumber = 0;
  currentSet.forEach(dice => {
    if (dice !== 6) {
      diceSet.reroll(currentSet.indexOf(dice));
    } else {
      sixNumber++;
    }
  })
  currentSet = diceSet.getCurrent();
  console.log(currentSet);
  console.log('------------------');
}