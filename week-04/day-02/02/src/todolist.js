import React from 'react';

import deleteIcon from './delete.svg';
import undoneIcon from './undone.svg';
import doneIcon from './done.svg';
import todoListStyle from './todolist.module.css';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.addIssue = this.addIssue.bind(this);
        this.setIssue = this.setIssue.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
    }

    deepCopyState() {
        let copyState = new Object();
        for (let key in this.state) {
            copyState[key] = this.state[key];
        }
        return copyState;
    }

    addIssue() {
        let inputIssue = document.getElementsByClassName('input-box')[0].value;
        if (inputIssue.length < 3) {
            alert("issue name must be longer than 3 characters!");
            document.getElementsByClassName('input-box')[0].value = '';
            return;
        }
        let copyState = this.deepCopyState();
        copyState[inputIssue] = false;
        this.setState(copyState);
    }

    setIssue(event) {
        let copyState = this.deepCopyState();
        copyState[event.target.id.substr(0, event.target.id.length - 5)] = !this.state[event.target.id.substr(0, event.target.id.length - 5)];
        this.setState(copyState);
    }

    deleteIssue(event) {
        let copyState = this.state;
        delete copyState[event.target.id.substr(0, event.target.id.length - 7)];
        this.setState(copyState);
    }

    render() {
        return (
            <>
                <div className="input-container">
                    <input type="text" className="input-box" />
                    <button type="submit" className="input-button button-text" onClick={this.addIssue}>Add</button>
                </div>
                <ul className="list-container todo-item">
                    {Object.keys(this.state).map(issue =>
                        <li className={todoListStyle.issueLine} key={issue}>{issue}
                            <div className={todoListStyle.iconContainer}>
                                <img src={deleteIcon} className={todoListStyle.deleteIcon} onClick={this.deleteIssue} id={issue + ' delete'} alt='delete icon' />
                                <img src={this.state[issue] ? doneIcon : undoneIcon} className={todoListStyle.doneIcon} onClick={this.setIssue} id={issue + ' done'} alt='finish icon' />
                            </div>
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default TodoList;
