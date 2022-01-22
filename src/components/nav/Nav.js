import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

function Nav() {
    let style = {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "dodgerblue"
    }

    let linkStyle = {
        margin: "10px",
        color: "white",
        textDecoration: "none"
    }

    return(
        <nav style={style}>
            <NavLink to="/" style={linkStyle} className={(navigationData) => navigationData.isActive ? "activeLinkStyle" : "" }>Home</NavLink>
            <NavLink to="/about" style={linkStyle} className={(navigationData) => navigationData.isActive ? "activeLinkStyle" : "" }>About</NavLink>
        </nav>
    );
}

export default Nav;
