import React, { Component } from 'react';

const context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Context.Provider>
        {this.props.children}
      </Context.Provider>  
    );
  }
  
  signIn = async () => {

  }

  signOut = () => {

  }
}

/**
 * A higher-order component that wraps the provided 
 * component in a Context Consumer component.
 * 
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export const Consumer = context.Consumer;

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

