import React, { Component } from 'react'
import CompB from './CompB';
import { Consumer } from './DefinedContext';

export default class CompA extends Component {
    render() {
        return <div>
            <Consumer>
                {value => <div>Hello, {value.name}</div>}
            </Consumer>
            <CompB />
        </div>;
    }
}
