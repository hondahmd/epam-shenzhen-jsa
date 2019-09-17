'use strict'

let ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];
ag.forEach(function(_, index) {
    ag[index] = ag[index] + ag[index];
});
console.log(ag);