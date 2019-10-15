import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

import hellowWorldModule from './helloworld.module.css';

class Routers extends React.Component {
    constructor() {
        super();
        this.errorCode = '123';
    }

    helloWorld() {
        return (
            <h1>Hello World!</h1>
        );
    }

    error() {
        return (
            <h1>Something bad happened</h1>
        );
    }

    rErrorCode(props) {
        return (
            <h1>Error: {props.match.params.errorCode}</h1>
        );
    }

    notImplemented() {
        return (
            <h1>This page is not implemented yet</h1>
        );
    }


    render() {
        return (
            <>
                <Router>
                    <div className={hellowWorldModule.container}>
                        <Link to='/'>hello-world</Link>
                        <Link to='/error'>error</Link>
                        <Link to={`/error/${this.errorCode}`}>error-code</Link>
                        <Link to='/inprogress'>Nah</Link>
                    </div>
                    <Switch>
                        <Route exact path='/'>{this.helloWorld}</Route>
                        <Route exact path='/error'>{this.error}</Route>
                        <Route path={`/error/:errorCode`}>{this.rErrorCode}</Route>
                        <Route path='/inprogress'>{this.notImplemented}</Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Routers;
