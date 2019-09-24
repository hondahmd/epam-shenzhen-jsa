'use strict';

import Queue from './queueinterface';

class ArrayQueue implements Queue {
    private queue: string[];

    constructor() {
        this.queue = [];
    }

    public empty(): boolean {
        return this.queue.length === 0 ? true : false;
    }

    public peek(): string {
        return this.queue[0];
    }

    public add(value: string): void {
        this.queue.push(value);
    }

    public remove(): string {
        let result = this.queue[0];
        this.queue.shift();
        return result;
    }
}

export default ArrayQueue;
