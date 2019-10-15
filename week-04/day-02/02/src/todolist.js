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
        this.finishIssue = this.finishIssue.bind(this);
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

    finishIssue(event) {
        let copyState = this.deepCopyState();
        copyState[event.target.id.split(' ')[0]] = true;
        this.setState(copyState);
    }

    deleteIssue(event) {
        let copyState = this.deepCopyState();
        delete copyState[event.target.id.split(' ')[0]];
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
                            <img src={deleteIcon} className={todoListStyle.deleteIcon} onClick={this.deleteIssue} id={issue + ' delete'} alt='delete icon'/>
                            <img src={this.state[issue] ? doneIcon : undoneIcon} className={todoListStyle.doneIcon} onClick={this.finishIssue} id={issue + ' done'} alt='finish icon'/>
                        </li>
                    )}
                </ul>
            </>
        );
    }
}

export default TodoList;
