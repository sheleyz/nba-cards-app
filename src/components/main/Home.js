import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";

function Home() {
    let wrapperStyle = {
        minHeight: "414px",
        width: "1000px",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "lightgrey"
    };

    const cards = useSelector((state) => state.cards);

    const cardEles = cards.map((player, index) => (
        <Card key={index} data={player} />
    ));

    return (
        <div className="App">
            <h1>NBA Cards App</h1>
            <div className="cardWrapper" style={wrapperStyle}>{cardEles}</div>
        </div>
    );
}

export default Home;
