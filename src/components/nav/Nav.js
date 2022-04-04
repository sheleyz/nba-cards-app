import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { toggleOptions } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function Nav() {
    const dispatch = useDispatch();

    let style = {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#0b1b2c",
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "40px",
        width: "100%"
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
            <div onClick={() => dispatch(toggleOptions())} className="buttonStyle">Sort</div>
        </nav>
    );
}

export default Nav;
