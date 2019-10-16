import React from 'react';

class Cmpnt2 extends React.Component {
    constructor(props) {
        super(props);
        this.startTime = new Date();
    }

    componentDidMount() {
        let finishTime = new Date();
        this.props.func('Component2', finishTime.getMilliseconds() - this.startTime.getMilliseconds());
    }

    render() {
        return (
            <>
                <p>Component2</p>
            </>
        );
    }
}

export default Cmpnt2;