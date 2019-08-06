import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Header Title</h1>
          <nav>
            <Link className="login" to="/login">Log In</Link>
            <Link className="signup" to="/signup">Sign Up</Link>
          </nav>
        </div>
      </div>
    );
  }
};
