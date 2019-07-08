import React, { Component } from 'react'

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: this.props.username || "",
			comments: this.props.comments || "",
			topic: this.props.topic || ""
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
		alert(`${username} ${comments} ${topic}`);
	}

	render() {
		const { username, comments, topic } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>Username</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						rows="1"
						name="comments"
						value={comments}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label>Topic</label>
					<select name="topic" value={topic} onChange={this.handleChange}>
						<option hidden disabled></option>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}
