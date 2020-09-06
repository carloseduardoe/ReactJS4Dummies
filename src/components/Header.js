import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

export class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             expanded: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }
    
    render() {
        return <header className="header">
            <nav className="navbar" onClick={e => this.toggle(e)}>
                <ul className = {`navbar_navigation_list ${this.state.expanded ? "expanded" : ""}`}>
                    <li className="navbar_navigation_item">
                        <Link exact to="/">Home</Link>
                    </li>
                    <li className="navbar_navigation_item">
                        <Link exact to="/signin">Sign in</Link>
                    </li>
                    <li className="navbar_navigation_item">
                        <Link exact to="/signout">Sign out</Link>
                    </li>
                    <li className="navbar_navigation_item">
                        <Link exact to="/signup">Sign up</Link>
                    </li>
                    <li className="navbar_navigation_item">
                        <Link exact to="/todos">Todos</Link>
                    </li>
                    <li className="navbar_navigation_item">
                        <Link exact to="/tutorials">Tutorials</Link>
                    </li>
                </ul>
                
                <button className="navbar_navigation_toggle"></button>
                <span className="navbar_navigation_links"></span>

                <div className="navbar_logo"></div>
                <div className="navbar_right"></div>
            </nav>
        </header>;
    }
}

export default Header;