'use strict';

import NodeStack from './nodestack';
import Queue from './queueinterface';
import Stack from './stackinterface';

class StackQueue implements Queue {
    private _insertStack: NodeStack;
    private _deleteStack: NodeStack;

    constructor() {
        this._insertStack = new NodeStack;
        this._deleteStack = new NodeStack;
    }

    private transfer(): void {
        if (this._deleteStack.empty()) {
            while (!this._insertStack.empty()) {
                let tmp = this._insertStack.pop();
                this._deleteStack.push(tmp);
            }
        }
    }

    public empty(): boolean {
        return this._insertStack.empty() && this._deleteStack.empty();
    }

    public peek(): string {
        this.transfer();
        return this._deleteStack.peek();
    }

    public add(value: string): void {
        this._insertStack.push(value);
    }

    public remove(): string {
        this.transfer();
        return this._deleteStack.pop();
    }
}

export default StackQueue;
