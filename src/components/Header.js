import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return <header className="header">
            <nav className="navbar">
                <div className="navbar_block">
                </div>
                <div className="navbar_block">
                </div>
                <div className="navbar_block">
                </div>
            </nav>
        </header>;
    }
}

export default Header;

// import { NavLink } from 'react-router-dom';
// <NavLink exact to={item.path}>{item.name}</NavLink>