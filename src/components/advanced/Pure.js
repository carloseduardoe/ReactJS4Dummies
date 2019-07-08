import React, { Component } from 'react';
import PureComp from './Pure/PureComponent';
import RegularComp from './Pure/RegularComponent';
import MemoComp from './Pure/MemoComponent';

export default class Pure extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'user'
		};
	}

	componentDidMount() {
		let iterations = 0, 
		    interval = setInterval(() => {
				this.setState({
					name: 'user'
				});
				iterations++;
				if (iterations === 3) {
					clearInterval(interval);
				}
			}, 1000);
	}

	render() {
		return <div>
			<PureComp name={this.state.name}/>
			<MemoComp name={this.state.name} />
			<RegularComp name={this.state.name}/>
		</div>;
	}
}
