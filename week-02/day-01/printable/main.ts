import Domino from "./domino";
import Todo from "./todo";

const dominoes = [];
const todos = [];

dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

todos.push(new Todo("eat", 30));
todos.push(new Todo("sleep", 60));
todos.push(new Todo("code", 120));

for (const domino of dominoes) {
    domino.printAllFields();
}
for (const todo of todos) {
    todo.printAllFields();
}
