import React, { Component } from 'react';

export default class ButtonClicks extends Component {
    render() {
        const { position, incrementCount } = this.props;
        return <button onClick={incrementCount}>clicked {position} times</button>;
    }
}
