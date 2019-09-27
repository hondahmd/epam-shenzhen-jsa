'use strict'

import ReadFile from './readfile';
import HanoiSolver from './hanoisolver';

let readFile = new ReadFile();
let hanoiSolver = new HanoiSolver();
let fileName = process.argv.splice(2);

// read the file and get the towers
readFile.readContent(fileName[0]);
let [towerA, towerB, towerC] = readFile.getTowers();
/*
towerA = [1,2,3];
towerB = [];
towerC = [];
*/

hanoiSolver.init(towerA, towerB, towerC);
console.time('Solution found in');
let steps = hanoiSolver.getSteps();
console.timeEnd('Solution found in');
console.log(`Shortest solution is ${steps} steps:`);
let result = hanoiSolver.getRoute();
result.forEach(step => console.log(step));
