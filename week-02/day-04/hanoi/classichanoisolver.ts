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
        this.steps = [[]];
    }

    private arrayEqual(array1: number[], array2: number[]): boolean {
        if (array1.length !== array2.length) { return false; }
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }

    private transOnce(fromTower: number[], toTower: number[]): void {
        toTower.unshift(fromTower.shift());
    }

    private transOtherDisk(firstTower: number[], secondTower: number[], pos1: number, pos2: number): void {
        if (secondTower.length === 0 || firstTower[0] < secondTower[0]) {
            this.steps.push([firstTower[0], pos1, pos2]);
            this.transOnce(firstTower, secondTower);
        } else if (firstTower.length === 0 || firstTower[0] > secondTower[0]) {
            this.steps.push([secondTower[0], pos2, pos1]);
            this.transOnce(secondTower, firstTower);
        }
    }

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

    private translateStep(step: number[]): string {
        let from = '';
        let to = '';
        if (this.finalState.length % 2 === 0) {
            if (step[1] === 0) {
                from = 'A';
            } else if (step[1] === 1) {
                from = 'B';
            } else if (step[1] === 2) {
                from = 'C';
            }
            if (step[2] === 0) {
                to = 'A';
            } else if (step[2] === 1) {
                to = 'B';
            } else if (step[2] === 2) {
                to = 'C';
            }
        } else {
            if (step[1] === 0) {
                from = 'A';
            } else if (step[1] === 1) {
                from = 'C';
            } else if (step[1] === 2) {
                from = 'B';
            }
            if (step[2] === 0) {
                to = 'A';
            } else if (step[2] === 1) {
                to = 'C';
            } else if (step[2] === 2) {
                to = 'B';
            }
        }
        return `${step[0]} ${from} -> ${to}`;
    }

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
