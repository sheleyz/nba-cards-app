import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { increaseLimit } from "../../redux/reducers/setActions";

function Home() {
    const dispatch = useDispatch();

    let wrapperStyle = {
        minHeight: "414px",
        width: "1000px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "lightgrey",
    };

    const itemLimit = useSelector((state) => state.itemLimit);
    const cards = useSelector((state) => state.cards);
    const cardEles = cards.slice(0, itemLimit).map((player, index) => <Card key={index} data={player} />);

    return (
        <div className="App">
            <h1>NBA Cards App</h1>
            <div className="cardWrapper" style={wrapperStyle}>
                {cardEles}
            </div>
            <button onClick={() => dispatch(increaseLimit())}>Load More</button>
        </div>
    );
}

export default Home;
