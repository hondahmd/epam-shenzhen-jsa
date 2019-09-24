'use strict';

interface ILinkedList {
    add(value: string, index?: number): void;
    get(index: number): string;
    removeItem(value: string): void;
    remove(index: number): string;
    size(): number;
  }

export default ILinkedList;