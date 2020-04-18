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

  buildInput = (config, index) => {
    let input;
    
    switch(config.type) {
      case "textarea":
        input = <textarea key={index} type="textarea" {...config.attributes}/>;
        break;
      case "select":
        input = <select key={index} type="text" {...config.attributes}>{
          config.options ? config.options.map((item, index) => 
            <option key={index} value={item.value} {...item.attributes}>
              {item.text}
            </option>
          ) : null
        }</select>;
        break;
      default:
        input = <input key={index} type="text" {...config.attributes}/>
        break;
    }
    
    return input;
  }

  render() {
    const { title, errors, submitText, cancelText, fields } = this.props;
    
    return <div className="form_layer">
      <h1 className="form_title">{title}</h1>
      <ErrorsDisplay errors={errors} />
      <form className="form_body" onSubmit={this.handleSubmit}>
        { fields ? fields.map((item, index) => this.buildInput(item, index)) : null }
        <div className="form_actions">
          <button type="submit">{submitText}</button>
          <button onClick={this.handleCancel}>{cancelText}</button>
        </div>
        {this.props.children}
      </form>
    </div>;
  }
}
