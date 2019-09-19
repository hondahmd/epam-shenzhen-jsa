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

  checkNotSix() {
    let result = [];
    this.dice.forEach((value, index) => {
      if (value !== 6) result.push(index);
    })
    return result;
  }
}

const diceSet = new DiceSet();
console.log(diceSet.roll());
console.log(diceSet.getCurrent());

console.log('------------------');

let notSix = diceSet.checkNotSix();
while (notSix.length !== 0) {
  notSix.forEach(value => {
    diceSet.reroll(value);
  })
  notSix = diceSet.checkNotSix();
  console.log(diceSet.getCurrent());
  console.log('------------------');
}