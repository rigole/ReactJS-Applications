import React from "react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt=""/>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/">Menu</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar