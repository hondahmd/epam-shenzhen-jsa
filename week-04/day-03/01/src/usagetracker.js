import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import MainBoard from './mainboard';
import Cmpnt1 from './cmpnt1';
import Cmpnt2 from './cmpnt2';

class UsageTracker extends React.Component {
    constructor() {
        super();
        this.state = {records: []};
    }

    getTimeFromChild(childName, time) {
        this.state.records.push(
            {
                childName: childName,
                time: time
            }
        );
        this.setState(this.state);
    }

    render() {
        return (
            <>
                <Router>
                    <div>
                        <Link to='/'>mainboard</Link>
                        <Link to='/cmpnt1'>Component1</Link>
                        <Link to='/cmpnt2'>Component2</Link>
                    </div>
                    <Switch>
                        <Route path="/">
                            <MainBoard data={this.state}/>
                            <Route path="/cmpnt1"><Cmpnt1 func={(this.getTimeFromChild.bind(this))} /></Route>
                            <Route path="/cmpnt2"><Cmpnt2 func={(this.getTimeFromChild.bind(this))} /></Route>
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default UsageTracker;
