import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header        from './components/Header';
import Public        from './components/Public';
import Authenticated from './components/Authenticated';
import TodoList      from './components/TodoList';
import NotFound      from './components/NotFound';
import UserSignUp    from './components/UserSignUp';
import UserSignIn    from './components/UserSignIn';
import UserSignOut   from './components/UserSignOut';
import Tutorials     from './components/Tutorials';

import './assets/styles/App.scss';
import './assets/styles/Auth.css';

export default class App extends Component {
    render() {
        return <Router>
            <Header />
            <Switch>
                <Route exact path = "/"                          component = { Public } />
                <Route       path = "/safe"                      component = { Authenticated } />
                <Route       path = "/todos"                     component = { TodoList } />
                <Route       path = "/login"                     component = { UserSignIn } />
                <Route       path = "/signup"                    component = { UserSignUp } />
                <Route       path = "/logout"                    component = { UserSignOut } />
                <Route exact path = "/tutorials/:category/:item" component = { Tutorials } />
                <Route       path = "/tutorials"                 component = { Tutorials } />
                <Route                                           component = { NotFound } />
            </Switch>
        </Router>;
    }
}
        