import React, { Component } from 'react';

export default class RenderProps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.start || 0,
			increment: this.props.increment || 1
		};
	}

	incrementCount = () => {
		this.setState(prevstate => ({
			count: prevstate.count + prevstate.increment
		}));
	}
	
	render() {
		return <div>
			{this.props.create(this.state.count, this.incrementCount)}
		</div>;
	}
}
