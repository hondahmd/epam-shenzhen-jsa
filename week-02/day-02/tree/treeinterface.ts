'use strict';

interface Tree {
    empty(): boolean;
    add(value: string): void;
    remove(value: string): void;
    search(value: string): boolean
  }

export default Tree;
