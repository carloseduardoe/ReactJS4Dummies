import React from 'react';
import DHOCCounter from './DHOCCounter';

export default class DElementHover extends DHOCCounter {
	render() {
		return <h5 onMouseOver={this.incrementCounter}>Hovered: {this.state.count}</h5>;
	}
}
