'use strict'

import Stack from './stackinterface';
import Node from '../linkedlistandnode/node';

class NodeStack implements Stack{
    private _head: Node;
    private _tail: Node;

    constructor() {
        this._head = new Node("for easy use");
        this._tail = null;
    }

    public empty(): boolean {
        return (this._tail === null) ? true : false;
    }

    public peek(): string {
        return this._tail.getValue();
    }

    public push(value: string): void {
        let newNode = new Node(value);
        newNode.setPrevious(this._tail);
        newNode.setNext(null);
        if (this.empty()) {
            this._head.setNext(newNode);
            this._tail = newNode;
        } else {
            this._tail.setNext(newNode);
            this._tail = this._tail.getNext();
        }
    }

    public pop(): string {
        let result = this._tail.getValue();
        let tmp = this._tail;
        this._tail = this._tail.getPrevious();
        if (this._tail !== null) {this._tail.setNext(null);}
        tmp = null;
        return result;
    }
}

export default NodeStack;
