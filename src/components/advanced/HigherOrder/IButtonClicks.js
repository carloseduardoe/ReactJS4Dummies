import React, { Component } from 'react';
import IHOCCounter from './IHOCCounter';

class ButtonClicks extends Component {
    render() {
        const { handler, count }= this.props;
        return <button onClick={handler}>Clicked: {count}</button>;
    }
}

export default IHOCCounter(ButtonClicks);
