import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import User from '../helpers/User';

export default class UserSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      errors: []
    };

    this.fields = [{
      type: "text",
      attributes: {
        id: "su_name",
        name: "name",
        placeholder: "Name",
        className: "form_text-input",
        onChange: this.change
      }
    }, {
      type: "textarea",
      attributes: {
        id: "su_description",
        name: "description",
        rows: 7,
        placeholder: "Enter a description",
        className: "form_text-input",
        onChange: this.change
      }
    }, {
      type: "text",
      attributes: {
        id: "su_mail",
        name: "email",
        placeholder: "e-Mail",
        className: "form_text-input",
        onChange: this.change
      }
    }, {
      type: "password",
      attributes: {
        id: "su_password",
        name: "password",
        placeholder: "Password",
        className: "form_text-input",
        onChange: this.change
      }
    }, {
      type: "password",
      attributes: {
        id: "su_password_confirm",
        name: "password_confirm",
        placeholder: "Re-type Password",
        className: "form_text-input",
        onChange: this.change
      }
    }, {
      type: "select",
      attributes: {
        id: "su_select",
        name: "type",
        className: "form_select-input",
        onChange: this.change
      },
      options: [{
          text: "select account type",
          value: "",
          attributes: {
            hidden: true
          }
        },
        {
          text: "A",
          value: "A"
        },
        {
          text: "B",
          value: "B"
        },
        {
          text: "C",
          value: "C"
        }
      ]
    }];
  }
  
  change = (event) => {
    const el = event.target;

    el.classList.remove("touched");
    if (el.value) {
      el.classList.add("touched");
    }

    this.setState(() => {
      return {
        [el.name]: el.value
      };
    });
  }

  submit = () => {
    const { context } = this.props;
    const { name, description, email, password, type } = this.state;
    const user = new User({
      name, description, email, password, type
    });

    user.add().then(errors => {
      if (errors.length) {
        this.setState({ errors });
      }
      else {
        this.props.history.push('/');
      }
    }).catch(err => {
      this.props.history.push('/error');
    });
  }

  cancel = () => {
    this.props.history.push('/');
  }

  render() {
    const { errors } = this.state;

    return <div className = "component_layer" >
      <Form title = "Sign Up" submitText = "Submit" cancelText = "Cancel"
            submit = { this.submit } cancel = { this.cancel }
            fields = { this.fields } errors = { errors } >
        <p className = "form_tip" >
          Already have an account?<br/>
          <Link to = "/signin">click here to sign in !</Link>
        </p>
      </Form>
    </div>;
  }
}