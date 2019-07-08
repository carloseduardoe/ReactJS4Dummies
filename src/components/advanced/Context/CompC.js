import React, { Component } from 'react';
import { Consumer } from './DefinedContext';
import DefinedContext from './DefinedContext';

export default class CompC extends Component {
    static contextType = DefinedContext;
    
    render() {
        return <div>
            <Consumer>
                {value => <div>stature: {value.stature}</div>}
            </Consumer>
            <br/>
            Context: {JSON.stringify(this.context)}
        </div>;
    }
}
