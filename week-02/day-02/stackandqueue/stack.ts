interface Stack {
  empty(): boolean;
  peek(): string;
  push(value: string): void;
  pop(): string;
}

class ArrayStack implements Stack{
  top: number;
  stack: string[];

  constructor() {
    this.stack = [];
    this.top = -1;
  }

  empty(): boolean {
    return this.top === -1 ? true : false;
  }

  peek(): string {
    return this.stack[this.top];
  }

  push(value: string): void {
    this.stack.push(value);
    this.top++;
  }

  pop(): string {
    let result = this.stack[this.top];
    this.stack.splice(this.top, 1);
    this.top--;
    return result
  }
}

let stack = new ArrayStack();
console.log(stack.empty());
stack.push("1");
stack.push("1");
stack.push("1");
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);
