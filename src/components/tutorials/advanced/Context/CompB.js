import React, { Component } from 'react';
import CompC from './CompC';
import { Consumer } from './DefinedContext';

export default class CompB extends Component {
    render() {
        return <div>
            <Consumer>
                {value => <div>age: {value.age}</div>}
            </Consumer>
            <CompC />
        </div>;
    }
}
