'use strict';

const Warehouse = require('./warehouse');
const Item = require('./item');
const Toy = require('./toy');
const Tool = require('./tool');

const wh = new Warehouse();
wh.addItem(new Item("vase", 30));
wh.addItem(new Toy("pebble", undefined, "grey"));
wh.addItem(new Toy("car", 10, "blue"));
wh.addItem(new Tool("hammer", 25));
wh.printItemsOfType(Item);
wh.printItemsOfType(Toy);
wh.printItemsOfType(Tool);