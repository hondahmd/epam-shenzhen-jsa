'use strict';

interface Stack {
    empty(): boolean;
    peek(): string;
    push(value: string): void;
    pop(): string;
  }

export default Stack;