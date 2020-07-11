import React, {Component} from 'react';
import "./navigation.css"
import {Link} from "react-router-dom";




class Navigation extends Component {

    render() {

        return (
            <nav className="" role="navigation">

                <ul className={"nav-links"}>
                    <li><Link to={"/"} >Home</Link></li>
                    <li><Link to={"/register"}>Register</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>

            </nav>
        );
    }
}

export default Navigation;
