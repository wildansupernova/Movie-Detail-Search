import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { history } from './../store/configureStore';
import Home from './Home';
import DetailMovie from './DetailMovie';

import '../styles/App.css';
import '../styles/Style.css';

const PublicRoute = ({component: Component, isAuthenticated, ...props}) => {
    return (
        <Route
            {...props}
            render={(props) => !isAuthenticated
                ? <Component {...props} />
                : <Redirect to='/' />}
        />
    );
};


class App extends Component {

    render() {
        const { auth } = this.props;
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route
                        exact
                        path={`/detail/:id`}
                        component={DetailMovie}
                    />
                    <PublicRoute isAuthenticated={ auth.isAuthenticated } exact path="/" component={ Home } />
                </div>
            </ConnectedRouter>
        );
    }
}




const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
