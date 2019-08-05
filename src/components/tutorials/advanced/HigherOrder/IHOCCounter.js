import React from 'react'

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

const HOCCounter = (WrappedComponent) => {
	class CounterParent extends React.Component {
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
		
		render() {
			// start={this.state.count}
			// increment={this.state.increment}

			return <WrappedComponent 
				{...this.state}
				handler={this.incrementCounter}
			/>
		}
	}
	
	return CounterParent;
}

export default HOCCounter;
	