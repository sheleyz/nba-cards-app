import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { increaseLimit } from "../../redux/reducers/setActions";
import { Outlet } from "react-router-dom";

function Cards() {
    const dispatch = useDispatch();

    let wrapperStyle = {
        minHeight: "414px",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "lightgrey"
    };

    const itemLimit = useSelector((state) => state.itemLimit);
    const cards = useSelector((state) => state.cards);
    const cardEles = cards.slice(0, itemLimit).map((player, index) => <Card key={index} data={player} />);

    return (
        <div className="App">
            <div className="cardWrapper" style={wrapperStyle}>
                {cardEles}
            </div>
            <button onClick={() => dispatch(increaseLimit())}>Load More</button>
            <Outlet />
        </div>
    );
}

export default Cards;
