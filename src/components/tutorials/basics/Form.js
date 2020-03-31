import React, { Component } from 'react'

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username || "",
			comments: this.props.comments || "",
			topic: this.props.topic
		};
	}

	handleChange = e => {
		let state = {}, input = e.target;
		state[input.name] = input.value;
		this.setState(state);
	}

	handleSubmit = e => {
		e.preventDefault();
		const {username, comments, topic} = this.state;
		alert(`${topic}\n\n"${comments}"\n\n- ${username}`);
	}

	render() {
		const { username, comments, topic } = this.state;

		return (
			<form className="component_form" onSubmit={this.handleSubmit}>
				<div className="input_group">
					<label>Username</label>
					<input
						type="text"
						placeholder="Type user name"
						name="username"
						value={username}
						onChange={this.handleChange}
					/>
				</div>
				<div className="input_group">
					<label>Comments</label>
					<textarea
						rows="5"
						placeholder="Type Message"
						name="comments"
						value={comments}
						onChange={this.handleChange}
					/>
				</div>
				<div className="input_group">
					<label>Topic</label>
					<select name="topic" value={topic} onChange={this.handleChange}>
						<option selected hidden disabled>Select topic</option>
						<option value="React">React</option>
						<option value="Angular">Angular</option>
						<option value="Vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}
