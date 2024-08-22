import React from "react";
import "../../index.css";

function Footer() {
    let style = {
        width: "100%",
        minHeight: "40px",
        color: "white",
        backgroundColor: "#0b1b2c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box"
    };

    let wrapperStyle = {
        maxWidth: "800px"
    };

    return (
        <footer className="footer" style={style}>
            <div className="wrapper" style={wrapperStyle}>
                <div style={{margin: "10px 0px"}}>
                    <a href="https://app.balldontlie.io/" target="_blank" rel="noopener noreferrer">View the API</a> used for this website.
                </div>
                <div style={{margin: "10px 0px"}}>
                    Disclaimer: This website is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the National Basketball Association (NBA), or any of its
                    subsidiaries or its affiliates. The official National Basketball Association (NBA) website can be found at <a href="https://www.nba.com" target="_blank" rel="noopener noreferrer">www.nba.com</a>. The name NBA as
                    well as related names, marks, emblems, and images are registered trademarks and copyrighted by the National Basketball Association.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
