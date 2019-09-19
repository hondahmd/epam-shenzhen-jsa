  'use strict';

const shop_items = ["Cupcake", 2, "Brownie", false];

function sweets(input) {
  input.splice(input.indexOf(2), 1, "Croissant");
  input.splice(input.indexOf(false), 1, "Ice cream");
  return input;
}

console.log(sweets(shop_items));

module.exports = sweets;