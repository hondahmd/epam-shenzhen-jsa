'use strict';

const Teacher = require('./10 - teacher');

class Student {
    constructor(name = 'Honda') {
        this.name = name;
    }

    learn() {
        console.log(`${this.name} is learning...`);
    }

    question(teacher) {
        teacher.answer();
    }
}

module.exports = Student;