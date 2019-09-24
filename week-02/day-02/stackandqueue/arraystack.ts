'use strict';

import Stack from './stackinterface';

class ArrayStack implements Stack{
  private top: number;
  private stack: string[];

  constructor() {
    this.stack = [];
    this.top = -1;
  }

  public empty(): boolean {
    return this.top === -1 ? true : false;
  }

  public peek(): string {
    return this.stack[this.top];
  }

  public push(value: string): void {
    this.stack.push(value);
    this.top++;
  }

  public pop(): string {
    let result = this.stack[this.top];
    this.stack.splice(this.top, 1);
    this.top--;
    return result
  }
}

export default ArrayStack;
