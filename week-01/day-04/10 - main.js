'use strict';

const Student = require('./10 - student');
const Teacher = require('./10 - teacher');

let teacher = new Teacher();
let student = new Student();

student.question(teacher);
teacher.teach(student);