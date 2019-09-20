'use strict';

const Plant = require('./plant');
const Flower = require('./flower');
const Tree = require('./tree');

class Garden {
    constructor() {
        this.flowers = [];
        this.trees = [];
        this.thirstyPlants = 0; // this var is meant for storing the number of the plants which need watering now.
    }

    add(plant) {
        if (plant instanceof Flower) {
            this.flowers.push(plant);
        } else if (plant instanceof Tree) {
            this.trees.push(plant);
        }
        if (plant.needWater()) {
            this.thirstyPlants++;
        }
    }

    showAll() {
        this.flowers.forEach(flower => {
            console.log(`The ${flower.color} Flower ${flower.needWater() ? "needs" : "doesn't need"} water.`);
        })
        this.trees.forEach(tree => {
            console.log(`The ${tree.color} Tree ${tree.needWater() ? "needs" : "doesn't need"} water.`);
        })
    }

    waterAll(number) {
        console.log(`\nWatering with ${number}`);
        let averageWater = number / this.thirstyPlants;
        this.flowers.forEach(flower => {
            if (flower.needWater()) {
                flower.water(averageWater);
                if (!flower.needWater()) {this.thirstyPlants--;}
            }
        })
        this.trees.forEach(tree => {
            if (tree.needWater()) {
                tree.water(averageWater);
                if (!tree.needWater()) {this.thirstyPlants--;}
            }
        })
    }
}

module.exports = Garden;