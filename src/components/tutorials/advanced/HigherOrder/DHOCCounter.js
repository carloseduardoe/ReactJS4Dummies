import { Component } from 'react'

/*
 * Higher Order Components are a means to implement inheritance
 * on react components.
 * 
 * A pattern where a function takes a component as an argument 
 * and returns a new component instance with the parent's 
 * functionality included:
 * 
 * 			const IronMan = withSuit(TonyStark);
 * 
 * i.e. a react component that wraps another one.
*/

export default class CounterParent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.start || 0,
			increment: this.props.increment || 1
		};
	}
	
	incrementCounter = () => {
		this.setState(
			prevState => ({count: prevState.count + prevState.increment})
		);
	}
}
	