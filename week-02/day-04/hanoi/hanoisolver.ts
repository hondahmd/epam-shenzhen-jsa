'use strict';

class HanoiSolver {
    private layerHeight: number;
    private layerLength: number;
    private allNodes: number[][][];
    private finalState: number[];

    constructor() {
        this.layerHeight = 0;
        this.layerLength = 1;
        this.allNodes = [[[]]];
        this.finalState = [];
    }

    private arrayEqual(array1: number[], array2: number[]): boolean {
        if (array1.length !== array2.length) {return false;}
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }

    private checkLayer(): boolean {
        for (let node = 0; node < this.allNodes.length; node++) {
            if (this.arrayEqual(this.allNodes[node][2], this.finalState)) {
                return true;
            }
        }
        return false;
    }

    private generateNewNode(parent: number[][], fromTower: number, toTower: number): void {
        let newA = new Array();
        let newB = new Array();
        let newC = new Array();
        let newParent = [newA, newB, newC];
        for (let i = 0; i < parent.length; i++) {
            for (let j = 0; j < parent[i].length; j++) {
                if (i === 0) {
                    newA.push(parent[i][j]);
                } else if (i === 1) {
                    newB.push(parent[i][j]);
                } else if (i === 2) {
                    newC.push(parent[i][j]);
                }
            }
        }
        newParent[toTower].unshift(newParent[fromTower].shift());
        this.allNodes.push(newParent);
    }

    private generateNewNodes(parent: number[][]): void {
        let numberA = parent[0].length > 0 ? parent[0][0] : this.finalState[this.finalState.length - 1] + 1;
        let numberB = parent[1].length > 0 ? parent[1][0] : this.finalState[this.finalState.length - 1] + 1;
        let numberC = parent[2].length > 0 ? parent[2][0] : this.finalState[this.finalState.length - 1] + 1;
        if (numberA < numberB) {
            this.generateNewNode(parent, 0, 1);
        } else if (numberA > numberB) {
            this.generateNewNode(parent, 1, 0);
        }
        if (numberA < numberC) {
            this.generateNewNode(parent, 0, 2);
        } else if (numberA > numberC) {
            this.generateNewNode(parent, 2, 0);
        }
        if (numberB < numberC) {
            this.generateNewNode(parent, 1, 2);
        } else if (numberB > numberC) {
            this.generateNewNode(parent, 2, 1);
        }
    }

    private generateNewLayer(): void {
        for (let node = 0; node < this.layerLength; node++) {
            this.generateNewNodes(this.allNodes[node]);
        }
        for (let node = 0; node < this.layerLength; node++) {
            this.allNodes.shift();
        }
    }

    public init(towerA: number[], towerB: number[], towerC: number[]): void {
        this.allNodes = [[towerA, towerB, towerC]];
        for (let i = 0; i < towerA.length + towerB.length + towerC.length; i++) {
            this.finalState.push(i + 1);
        }
    }

    public getSteps(): number {
        while (!this.checkLayer()) {
            this.generateNewLayer();
            this.layerLength = this.layerLength * 3;
            this.layerHeight++;
        }
        return this.layerHeight;
    }

}

export default HanoiSolver;
