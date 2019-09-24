'use strict';

import ILinkedList from './linkedlistinterface';
import Node from './node';

class LinkedList implements ILinkedList {
    private head: Node;
    private tail: Node;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    private getNodeByIndex(index: number): Node {
        let result = this.head;
        for (let i = 0; i < index; i++) {
            result = result.getNext();
            if (result === null) {
                break;
            }
        }
        return result;
    }

    private getNodeByValue(value: string): Node {
        let result = this.head;
        while (result !== null) {
            if (result.getValue() !== value) {
                result = result.getNext();
            } else {
                break;
            }
        }
        return result;
    }

    private addToTail(value: string): void {
        let newNode = new Node(value);
        newNode.setPrevious(this.tail);
        newNode.setNext(null);
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.setNext(newNode);
            this.tail = this.tail.getNext();
        }
    }

    private addByIndex(value: string, index: number): void {
        let tmp = this.getNodeByIndex(index);
        let newNode = new Node(value);
        if (tmp === null) {
            this.addToTail(value);
        } else {
            newNode.setNext(tmp);
            newNode.setPrevious(tmp.getPrevious());
            tmp.getPrevious().setNext(newNode);
            tmp.setPrevious(newNode);
        }
    }

    private deleteNode(removeNode: Node): void {
        if (removeNode === null) {
            console.log("Node to be deleted dose not exist.");
        } else {
            removeNode.getPrevious().setNext(removeNode.getNext());
            removeNode.getNext().setPrevious(removeNode.getPrevious());
            removeNode = null;
        }
    }

    public add(value: string, index?: number): void {
        index === undefined ? this.addToTail(value) : this.addByIndex(value, index);
    }

    public get(index: number): string {
        return this.getNodeByIndex(index).getValue();
    }

    public removeItem(value: string): void {
        this.deleteNode(this.getNodeByValue(value));
    }

    public remove(index: number): string {
        let removeNode = this.getNodeByIndex(index);
        let result = removeNode.getValue();
        this.deleteNode(removeNode);
        return result;
    }

    public size(): number {
        let count = 0;
        let tmp = this.head;
        while (tmp !== null) {
            tmp = tmp.getNext();
            count++;
        }
        return count;
    }
}

export default LinkedList;
