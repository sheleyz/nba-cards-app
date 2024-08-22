import React from "react";

function Card(props) {
    let cardStyle = {
        minHeight: "100px",
        width: "250px",
        backgroundColor: "#1d428a",
        color: "white",
        margin: "20px",
        textDecoration: "none"
    };

    return (
        <div style={cardStyle}>
            <div style={{ padding: "5px" }}>
                <h3>{props.first_name} {props.last_name}</h3>
                <h3>{props.team_name}</h3>
                <h3>Division: {props.division}</h3>
                <h3>Conference: {props.conference}</h3>
            </div>
        </div>
    );
}

export default Card;
