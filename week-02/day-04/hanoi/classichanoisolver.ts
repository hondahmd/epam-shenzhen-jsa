'use strict';

class ClassicHanoiSolver {
    towerA: number[];
    towerB: number[];
    towerC: number[];
    finalState: number[];
    steps: number[][];

    constructor() {
        this.towerA = [];
        this.towerB = [];
        this.towerC = [];
        this.finalState = [];
        this.steps = [];
    }

    // compare tow arrays
    private arrayEqual(array1: number[], array2: number[]): boolean {
        if (array1.length !== array2.length) { return false; }
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }

    // simply transfer one disk
    private transOnce(fromTower: number[], toTower: number[]): void {
        toTower.unshift(fromTower.shift());
    }

    // the step after transfer disk one
    private transOtherDisk(firstTower: number[], secondTower: number[], pos1: number, pos2: number): void {
        if (secondTower.length === 0 || firstTower[0] < secondTower[0]) {
            if (firstTower.length <1) {return;}
            this.steps.push([firstTower[0], pos1, pos2]);
            this.transOnce(firstTower, secondTower);
        } else if (firstTower.length === 0 || firstTower[0] > secondTower[0]) {
            if (secondTower.length <1) {return;}
            this.steps.push([secondTower[0], pos2, pos1]);
            this.transOnce(secondTower, firstTower);
        }
    }

    // the structure of transfering the disks
    private completeTrans(firstTower: number[], secondTower: number[], thirdTower: number[]): void {
        let diskOne = 0;
        while (!this.arrayEqual(this.towerC, this.finalState)) {
            if (diskOne % 3 === 0) {
                this.steps.push([1, 0, 1]);
                this.transOnce(firstTower, secondTower);
                this.transOtherDisk(firstTower, thirdTower, 0, 2);
            } else if (diskOne % 3 === 1) {
                this.steps.push([1, 1, 2]);
                this.transOnce(secondTower, thirdTower);
                this.transOtherDisk(firstTower, secondTower, 0, 1);
            } else {
                this.steps.push([1, 2, 0]);
                this.transOnce(thirdTower, firstTower);
                this.transOtherDisk(secondTower, thirdTower, 1, 2);
            }
            diskOne++;
        }

    }

    // translate single step
    private translateStep(step: number[]): string {
        let second = this.finalState.length % 2 === 0 ? 'B' : 'C';
        let third = this.finalState.length % 2 === 0 ? 'C' : 'B';
        let positions = ['A', second, third];
        return `${step[0]} ${positions[step[1]]} -> ${positions[step[2]]}`;
    }
    
    // translate all the steps
    private translateSteps(): string[] {
        let result = [];
        this.steps.forEach(step => {
            result.push(this.translateStep(step));
        });
        return result;
    }

    public init(towerA: number[], towerB: number[], towerC: number[]): void {
        this.towerA = towerA;
        this.towerB = towerB;
        this.towerC = towerC;
        towerA.forEach(disk => {
            this.finalState.push(disk);
        });
    }

    public doTask(): void {
        if (this.towerA.length % 2 === 0) {
            this.completeTrans(this.towerA, this.towerB, this.towerC);
        } else {
            this.completeTrans(this.towerA, this.towerC, this.towerB);
        }
    }

    public getResult(): string[] {
        return this.translateSteps();
    }
}

export default ClassicHanoiSolver;
