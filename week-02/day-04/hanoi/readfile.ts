'use strict';

import * as fs from 'fs-extra';
import * as path from 'path';

class ReadFile {
    private dummyContent: string[];
    private towerA: number[];
    private towerB: number[];
    private towerC: number[];

    constructor() {
        this.dummyContent = [];
        this.towerA = [];
        this.towerB = [];
        this.towerC = [];
    }

    private splitTowers(): void {
        this.dummyContent.forEach(line => {
            if (line.indexOf('A') === -1) {
                let elements = line.split(' ');
                if (elements[0] !== undefined) this.towerA.push(Number(elements[0]));
                if (elements[1] !== undefined) this.towerB.push(Number(elements[1]));
                if (elements[2] !== undefined) this.towerC.push(Number(elements[2]));
            }
        })
    }

    public readContent(fileName: string): void {
        try {
            this.dummyContent = fs.readFileSync(fileName, 'utf-8').split('\n');
        } catch (err) {
            console.log("Read file error!")
        }
    }

    public getContent(): string[] {
        return this.dummyContent;
    }

    public getTowers(): number[][] {
        this.splitTowers();
        return [this.towerA, this.towerB, this.towerC];
    }
}

export default ReadFile;
