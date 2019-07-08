import React from 'react';
import DHOCCounter from './DHOCCounter';

export default class DButtonClicks extends DHOCCounter {
    render() {
        return <button onClick={this.incrementCounter}>Clicked: {this.state.count}</button>;
    }
}
