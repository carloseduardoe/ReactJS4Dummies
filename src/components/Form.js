import React, { Component } from 'react';

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}

export default class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit();
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.cancel();
  }

  render() {
    const { title, errors, submitText, cancelText } = this.props;
    
    return <div className="component_layer">
      <h1 className="form-title">{title}</h1>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
        <div className="pad-bottom">
          <button className="button" type="submit">{submitText}</button>
          <button className="button button-secondary" onClick={this.handleCancel}>{cancelText}</button>
        </div>
      </form>
    </div>;
  }
}
