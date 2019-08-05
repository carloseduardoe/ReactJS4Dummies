import React, { Component } from 'react';

export default class ElementHover extends Component {
	render() {
		const { position, incrementCount } = this.props;
		return <h2 onMouseOver={incrementCount}>hovered {position} times</h2>;
	}
}
