import React, { Component } from 'react';

class SimpleGoldenAcornApp extends Component {
    constructor() {
        super();
        this.state = {count: 0};
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrement() {
        this.setState({count: this.state.count + 1});
    }

    handleDecrease() {
        if (this.state.count > 0) this.setState({count: this.state.count - 1});
    }

    oneKeyDown = (event) => {
        switch (event.key) {
            case 'ArrowUp':
                this.handleIncrement();
                break;
            
            case 'ArrowDown':
                this.handleDecrease();
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <>
                {document.addEventListener("keydown", this.oneKeyDown)}
                <button type="submit" onClick={this.handleIncrement}>Buy one</button>
                <p>{this.state.count}</p>
                <button type="submit" onClick={this.handleDecrease}>Eat one</button>
            </>
        )
    }
}

export default SimpleGoldenAcornApp;
