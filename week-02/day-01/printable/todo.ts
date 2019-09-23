import Printable from './printable';

class Todo implements Printable {
    task: string;
    time: number;

    constructor(task: string, time: number) {
        this.task = task;
        this.time = time;
    }

    printAllFields() {
        console.log(`Task ${this.task} needs ${this.time} minutes to be completed`);
    }
}

export default Todo;