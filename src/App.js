import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Header from './components/Header';
import Public from './components/Public';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Tutorials from './components/Tutorials';
import Authenticated from './components/Authenticated';

import './assets/styles/App.scss';
import './assets/styles/Auth.css';

import TodoList from './components/TodoList';

export default class App extends Component {
    render() {
        return <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Public} />
              <Route path="/safe" component={Authenticated} />
              <Route path="/todos" component={TodoList} />
              <Route path="/login" component={UserSignIn} />
              <Route path="/signup" component={UserSignUp} />
              <Route path="/logout" component={UserSignOut} />
              <Route path="/tutorials/:category/:item" component={Tutorials} exact/>
              <Route path="/tutorials" component={Tutorials} />
              <Route component={NotFound} />
            </Switch>
        </Router>;
    }
}
        