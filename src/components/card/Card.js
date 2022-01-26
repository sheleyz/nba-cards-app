import React from "react";

function Card(props) {
    let cardStyle = {
        minHeight: "100px",
        width: "250px",
        backgroundColor: "orange",
        margin: "20px"
    };

    return (
        <div style={cardStyle}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1585071258252-369a36d89e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80"
                    alt="Player"
                    width="250px"
                    height="250px"
                    style={{objectFit: "cover"}}
                />
            </div>
            <div style={{ padding: "5px" }}>
                <h3>{props.data.name}</h3>
                <h3>Position: {props.data.position}</h3>
                <h3>Points: {props.data.pts}</h3>
                <h3>Rebounds: {props.data.reb}</h3>
                <h3>Assists: {props.data.ast}</h3>
            </div>
        </div>
    );
}

export default Card;
