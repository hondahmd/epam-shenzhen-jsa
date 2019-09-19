'use strict';

const Student = require('./10 - student');

class Teacher {
    constructor(name = 'Adam') {
        this.name = name;
    }

    teach(student) {
        student.learn();
    }

    answer() {
        console.log(`${this.name} is answering...`);
    }
}

module.exports = Teacher;