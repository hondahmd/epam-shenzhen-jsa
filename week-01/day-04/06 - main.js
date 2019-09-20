'use strict';

const Pokemon = require('./06 - Pokemon');

const pokemonOfAsh = initializePokemon();

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');

console.log('I choose you, ');

function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

let chosen = pokemonOfAsh.filter(pokemon => {
    return pokemon.isEffectiveAgainst(wildPokemon);
})

chosen.forEach(pokemon => {
    console.log(pokemon.name);
})