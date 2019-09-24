'use strict';

class Node {
    private value: string;
    private next: Node;
    private previous: Node;

    constructor(value: string) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }

    public getValue(): string {
        return this.value;
    }

    public setNext(nextNode: Node): void {
        this.next = nextNode;
    }

    public setPrevious(previousNode: Node): void {
        this.previous = previousNode;
    }

    public getNext(): Node {
        return this.next;
    }

    public getPrevious(): Node {
        return this.previous;
    }
}

export default Node;
