'use strict'

const Person = require('./person');

class Student extends Person{
    constructor(name = 'Jane Doe', age = '30', gender = 'female', previousOrganization = 'The School of Life') {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    getGoal() {
        console.log("My goal is: Be a junior software developer.");
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    }

    skipDays(number) {
        this.skippedDays += number;
    }
}

module.exports = Student;