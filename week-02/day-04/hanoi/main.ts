'use strict'

import ReadFile from './readfile';
import HanoiSolver from './hanoisolver';

let readFile = new ReadFile();
let hanoiSolver = new HanoiSolver();

// read the file and get the towers
readFile.readContent("puzzle.txt");
let [towerA, towerB, towerC] = readFile.getTowers();

towerA = [1,2,3,4];
towerB = [];
towerC = [];


hanoiSolver.init(towerA, towerB, towerC);
console.log(hanoiSolver.getSteps());
