import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header    from './components/Header';
import Public    from './components/Public';
import TodoList  from './components/TodoList';
import NotFound  from './components/NotFound';
import SignUp    from './components/SignUp';
import SignIn    from './components/SignIn';
import SignOut   from './components/SignOut';
import Tutorials from './components/Tutorials';

import './assets/styles/styles.scss';

export default class App extends Component {
    render() {
        return <div>
            <Header />
            <Switch>
                <Route exact path = "/"                          component = { Public } />
                <Route       path = "/todos"                     component = { TodoList } />
                <Route       path = "/signin"                    component = { SignIn } />
                <Route       path = "/signup"                    component = { SignUp } />
                <Route       path = "/signout"                   component = { SignOut } />
                <Route exact path = "/tutorials/:category/:item" component = { Tutorials } />
                <Route       path = "/tutorials"                 component = { Tutorials } />
                <Route                                           component = { NotFound } />
            </Switch>
        </div>;
    }
}
        