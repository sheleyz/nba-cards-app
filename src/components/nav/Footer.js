import React from "react";
import "../../index.css";

function Footer() {
    let style = {
        width: "100%",
        height: "50px",
        color: "white",
        backgroundColor: "#0b1b2c",
        clear: "both",
        textAlign: "center",
        lineHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "25px"
    };

    return(
        <footer className="footer" style={style}>
            <div>Copyright 2022</div>
        </footer>
    );
}

export default Footer;
