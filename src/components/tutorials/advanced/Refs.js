import React, { Component } from 'react';
import Placeholder from './Refs/Placeholder';

export class Refs extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.cbRef = null;
		this.componentRef = React.createRef();
	}

	componentDidMount() {
		this.focus(true);
		setTimeout(() => {
			this.setState({});
		}, 2000);
	}

	componentDidUpdate() {
		this.focus(false);
	}

	clickHandler = () => {
		this.focus("component");
	}

	focus = (val) => {
		if (val === "component") {
			console.log("focusing", this.componentRef.current);
			this.componentRef.current.focus();
		} else if(val) {
			console.log("focusing", this.inputRef.current);
			this.inputRef.current.focus();
		} else {
			console.log("focusing", this.cbRef);
			this.cbRef.focus();
		}
	}

	// Old way to set refs
	setRef = (element) => {
		this.cbRef = element;
	}

	render() {
		return <div>
			<input type="text" ref={this.inputRef} />
			<br/>
			<select type="text" ref={this.setRef}>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>...</option>
			</select>
			<br/>
			<Placeholder ref={this.componentRef}/>
			<br/>
			<button onClick={this.clickHandler}>Focus Next</button>
		</div>;
	}
}

export default Refs
