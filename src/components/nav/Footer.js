import React from "react";
import "../../index.css";

function Footer() {
    let style = {
        width: "100%",
        height: "50px",
        color: "white",
        backgroundColor: "dodgerblue",
        clear: "both",
        textAlign: "center",
        lineHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        fontSize: "25px",
        position: "fixed",
        bottom: "0px"
    };

    return(
        <footer style={style}>
            <div>Copyright 2022</div>
        </footer>
    );
}

export default Footer;
