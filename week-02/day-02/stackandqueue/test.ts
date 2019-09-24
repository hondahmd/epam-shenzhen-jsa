import ArrayStack from './arraystack';
import ArrayQueue from './arrayqueue';
import NodeStack from './arraystack';
import StackQueue from './stackqueue';

let stack = new ArrayStack();
let queue = new ArrayQueue();
let nodestack = new NodeStack();
let stackqueue = new StackQueue();
console.log(stack.empty());
console.log(queue.empty());
console.log(nodestack.empty());
console.log(stackqueue.empty());
for (let i = 0; i < 10; i++) {
    stack.push(i.toString());
    queue.add(i.toString());
    nodestack.push(i.toString());
    stackqueue.add(i.toString());
}

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());

console.log(queue.peek());
console.log(queue.remove());
console.log(queue.peek());

console.log(nodestack.peek());
console.log(nodestack.pop());
console.log(nodestack.peek());

console.log(stackqueue.peek());
console.log(stackqueue.remove());
console.log(stackqueue.peek());
