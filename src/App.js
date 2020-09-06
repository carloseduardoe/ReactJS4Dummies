import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Route, 
    Switch 
} from 'react-router-dom';
import { Provider } from "./Context";

import PrivateRoute from './components/PrivateRoute';

import Header    from './components/Header';
import Public    from './components/Public';
import SignIn    from './components/SignIn';
import SignUp    from './components/SignUp';
import SignOut   from './components/SignOut';
import TodoList  from './components/TodoList';
import Tutorials from './components/Tutorials';
import NotFound  from './components/NotFound';

const App = props => {
    const [tokens, setTokens] = useState(
        JSON.parse(localStorage.getItem("tokens"))
    );
    const [user, setUser] = useState();
    
    const updateTokens = data => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setTokens({
            token: data.token,
            refresh: data.refresh
        });
        console.log('data', data);
    }

    const updateUser = data => {
        setUser({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
        });
        console.log('user', user);
    }

    const context = {
        user,
        updateUser,
        tokens, 
        updateTokens
    };
    
    return (
        <Router>
            <Provider value={context}>
                <Header />
                <Switch>
                    <Route        exact path="/"                          component={ Public } />
                    <Route              path="/signin"                    component={ SignIn } />
                    <Route              path="/signup"                    component={ SignUp } />
                    <PrivateRoute       path="/signout"                   component={ SignOut } />
                    <PrivateRoute       path="/todos"                     component={ TodoList } />
                    <PrivateRoute exact path="/tutorials/:category/:item" component={ Tutorials } />
                    <PrivateRoute       path="/tutorials"                 component={ Tutorials } />
                    <Route              path="*"                          component={ NotFound } />
                </Switch>
            </Provider>
        </Router>
    );
};

export default App;