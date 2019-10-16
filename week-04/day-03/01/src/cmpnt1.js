import React from 'react';

class Cmpnt1 extends React.Component {
    constructor(props) {
        super(props);
        this.startTime = new Date();
    }

    componentDidMount() {
        let finishTime = new Date();
        this.props.func(`Component1`, finishTime.getMilliseconds() - this.startTime.getMilliseconds());
    }

    render() {
        return (
            <p>Component1</p>
        );
    }
}

export default Cmpnt1;
