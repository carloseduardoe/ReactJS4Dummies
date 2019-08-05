import React, { Component } from 'react';
import IHOCCounter from './IHOCCounter';

class ElementHover extends Component {
	render() {
		const { handler, count }= this.props;
		return <h5 onMouseOver={handler}>Hovered: {count}</h5>;
	}
}

export default IHOCCounter(ElementHover);
