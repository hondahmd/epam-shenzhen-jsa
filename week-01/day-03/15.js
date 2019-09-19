'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

function putSaturn(planet) {
    planet.splice(planet.indexOf("Uranus"), 0, "Saturn")
    return planet;
}

const planetList = ['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
console.log(putSaturn(planetList));

module.exports = putSaturn;