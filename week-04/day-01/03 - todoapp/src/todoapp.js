import React, { Component } from 'react';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2
        },
        {
          text: 'Buy milk',
          prio: 1
        }
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2
        },
        {
          text: 'Mentoring others',
          prio: 1
        }
      ],
    };
    this.doneTodo = this.doneTodo.bind(this);
    this.deleteDone = this.deleteDone.bind(this);
  }

  doneTodo(event) {
    if (this.state.todo.length > 0) {
      this.state.doneTodo.push(this.state.todo.splice(event.target.id, 1)[0]);
      this.setState(this.state);
    }
  }

  deleteDone(event) {
    if (this.state.doneTodo.length > 0) {
      this.state.doneTodo.splice(event.target.id, 1);
      this.setState(this.state);
    }
  }

  generateTodos() {
    return (
      <>
        {this.state.todo.sort((a, b) => a.prio - b.prio).map((todo, index) => {
          return <li key={'todo' + index}>{todo.text} <button onClick={this.doneTodo} id={index}>done</button></li>
        })}
      </>
    );
  }

  generateDone() {
    return (
      <>
        {this.state.doneTodo.sort((a, b) => a.prio - b.prio).map((done, index) => {
          return <li key={'done' + index}>{done.text} <button onClick={this.deleteDone} id={index}>delete</button></li>
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <ul>TODOS:
                  {this.generateTodos()}
        </ul>
        <ul>DONE TODOS:
                  {this.generateDone()}
        </ul>
      </>
    );
  }
}

export default TodoApp;
