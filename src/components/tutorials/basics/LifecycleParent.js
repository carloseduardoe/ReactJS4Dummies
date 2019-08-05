import React, { Component } from 'react';
import LifecycleChild from './LifecycleChild';

const lifecycleMethods = `[{
	"type": "Mounting",
	"description": "When a component instance is being created and inserted into the DOM.", 
	"methods":[{
		"name": "constructor",
		"arguments": "props",
		"return": "",
		"description": "Called when a component is created, intended for state object initialization and event handler binding"
	}, {
		"name": "getDerivedStateFromProps",
		"arguments": "props, state",
		"return": "null or a new state object",
		"description": "(static) Rarely used, is needed when the state depends on prop changes over time."
	}, {
		"name": "render",
		"arguments": "",
		"return": "JSX that will be rendered.",
		"description": "Is the only required method, used to interpret props and state."
	}, {
		"name": "componentDidMount",
		"arguments": "",
		"return": "",
		"description": "Invoked immediately after a component and all of its children have been rendered, used to interact with the DOM or make requests."
	}]
}, {
	"type": "Updating",
	"description": "When a component is re-rendered as a result of a state change.", 
	"methods":[{
		"name": "getDerivedStateFromProps",
		"arguments": "props, state",
		"return": "null or a new state object",
		"description": "(static) Rarely used, is needed when the state depends on prop changes over time."
	}, {
		"name": "shouldComponentUpdate",
		"arguments": "nextProps, nextState",
		"return": "true or false",
		"description": "Rarely used, dictates if a component should re-render or not, used for performance optimization"
	}, {
		"name": "render",
		"arguments": "",
		"return": "JSX that will be rendered.",
		"description": "Is the only required method, used to interpret props and state."
	}, {
		"name": "getSnapshotBeforeUpdate",
		"arguments": "prevProps, prevState",
		"return": "null or value to be used as the third parameter in componentDidUpdate",
		"description": "Rarely used, is called right before the changes from the virtual DOM are reflected in the actual DOM, used to capture information and perform calculations."
	}, {
		"name": "componentDidUpdate",
		"arguments": "prevProps, prevState, snapshot",
		"return": "",
		"description": "Called after the rendering cycles have been completed, used to make ajax calls based on the previous and current props comparison."
	}]
}, {
	"type": "Unmounting",
	"description": "When a component is being removed from the DOM.", 
	"methods":[{
		"name": "componentWillUnmount",
		"arguments": "",
		"return": "",
		"description": "Called just before the component is unmounted and destroyed, used to perform cleanup on requests, event handlers, timers, etc..."
	}]
}, {
	"type": "ErrorHandling",
	"description": "Whenever an error occurs inside a component method.", 
	"methods":["getDerivedStateFromError","componentDidCatch"]
}]`;
console.log(JSON.parse(lifecycleMethods));


export default class LifecycleParent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'parent'
		};
		console.log('Parent constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Parent getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('Parent componentDidMount');
	}

	shouldComponentUpdate() {
		console.log('Parent shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Parent getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Parent componentDidUpdate');
	}

	changeState = () => {
		this.setState({
			name: 'parent re-rendered'
		});
	}

	render() {
		return (
			<div>
				<span>{this.state.name}</span>
				<button onClick={this.changeState}>Change state</button>
				{this.props.children}
			</div>
		);
	}
}