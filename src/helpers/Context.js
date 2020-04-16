import React, { Component } from 'react';
import User from './User';

const Context = React.createContext(); 

export class Provider extends Component {
  constructor() {
    super();
    this.User = new User();
  }
  
  signIn = async () => {

  }

  signOut = () => {

  }

  render() {
    const value = {
      user: this.user
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }
}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

