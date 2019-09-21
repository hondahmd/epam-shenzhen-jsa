'use strict';

const Carrier = require('./carrier');
const Aircraft = require('./aircraft');
const BattleMap = require('./battlemap');

let battlemap = new BattleMap("FordClass", "deGaulle");

battlemap.start();