import React, { Component } from 'react'
import CompA from './Context/CompA';
import { Provider } from './Context/DefinedContext';

/*
 * Context provides a way to access data in the component tree without the
 * need to pass props manually to every level.
*/

export default class Context extends Component {
    render() {
        return <div>
            <Provider value={{name: "username", age: 25, stature: 180}} >
                <CompA />
            </Provider>
        </div>;
    }
}
