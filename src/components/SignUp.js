import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      errors: []
    };
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  submit = (e) => {
    e.preventDefault();
  }

  cancel = (e) => {
    e.preventDefault();
  }

  render() {
    const { name, username, password, errors } = this.state;

    return <div className="component_layer">
      <Form title="Sign Up" submitText="Submit" cancelText="Cancel"
            errors={errors} submit={this.submit}
            cancel={this.cancel} >
        <input id="name" name="name" type="text" placeholder="Name"
          value={name} onChange={this.change} 
        />
        <input id="username" name="username" type="text" placeholder="User Name"
          value={username} onChange={this.change} 
        />
        <input id="password" name="password" type="password" placeholder="Password"
          value={password} onChange={this.change} 
        />
        <p className="form_tip">
          Already have a user account? <Link to="/signin">Click here</Link> to sign in!
        </p>
      </Form>
    </div>;
  }
}
