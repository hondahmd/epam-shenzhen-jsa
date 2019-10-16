import React from 'react';

class MainBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Time(milli)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.records.map((record, index) => 
                            <tr key={'record' + index}>
                                <td>{record.childName}</td>
                                <td>{record.time}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        );
    }
}

export default MainBoard;
