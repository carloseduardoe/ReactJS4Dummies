import React, { Component } from 'react';

const errorHandlers = `[{
	"type": "ErrorHandling",
	"description": "Whenever an error occurs inside a component.", 
	"methods":[{
		"name": "getDerivedStateFromError",
		"arguments": "error",
		"return": "new state object",
		"description": "(static) Used to render a fallback UI after componentDidCatch has been executed."
	}, {
		"name": "componentDidCatch",
		"arguments": "error, info",
		"return": "",
		"description": "Used to log information about errors thrown by a component."
	}]
}]`;
console.log(JSON.parse(errorHandlers));

/* 
 * Error Boundary: Any class component that implements the error handling lifecycle methods.
 * 
 * A sort of component error catcher if you will...
 */

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error(error);
		console.log(info);
	}

	render() {
		let containerStyle = {display: "flex", flexFlow: "column nowrap", alignItems: "center"};
		let imageStyle = {width: "400px"};

		if (this.state.hasError) {
			return <div style={containerStyle}>
				<h3>Whoops!</h3>
				<img style={imageStyle} 
					 src="https://img.memecdn.com/sum-ting-wong_o_3633973.jpg" 
					 alt="Image: sumtin went wong"/>
			</div>;
		}
		return <div>{this.props.children}</div>;
	}
}