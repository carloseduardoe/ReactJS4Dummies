import React, { Component } from 'react';
import Link from 'react-router-dom/NavLink';

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
        return <header className = "header">
            <nav className = "navbar">
                <ul className = {`navbar_navigation_list ${this.state.expanded ? "expanded" : ""}`}>
                    <li className = "navbar_navigation_item">
                        <Link onClick={() => this.toggle()} exact to = "/">Home</Link>
                    </li>
                    <li className = "navbar_navigation_item">
                        <Link onClick={() => this.toggle()} exact to = "/login">Login</Link>
                    </li>
                    <li className = "navbar_navigation_item">
                        <Link onClick={() => this.toggle()} exact to = "/signup">Signup</Link>
                    </li>
                    <li className = "navbar_navigation_item">
                        <Link onClick={() => this.toggle()} exact to = "/todos">Todos</Link>
                    </li>
                    <li className = "navbar_navigation_item">
                        <Link onClick={() => this.toggle()} exact to = "/tutorials">Tutorials</Link>
                    </li>
                    <li className = "navbar_navigation_item">
                        <Link onClick={() => this.toggle()} exact to = "/logout">Logout</Link>
                    </li>
                </ul>
                
                <button className="navbar_navigation_toggle" onClick={() => this.toggle()}></button>
                <span className="navbar_navigation_links"></span>

                <div className="navbar_logo"></div>
                <div className="navbar_right"></div>
            </nav>
        </header>;
    }
}

export default Header;