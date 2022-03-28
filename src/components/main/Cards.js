import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
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
        backgroundColor: "lightgrey",
        marginTop: "60px",
    };

    const [sort, setSort] = React.useState([]);

    const itemLimit = useSelector((state) => state.itemLimit);
    const cards = useSelector((state) => state.cards);
    const sorted = useSelector((state) => state.sorted);
    const name = useSelector((state) => state.name);

    React.useEffect(() => {
        let sortObject = () => {
            let sortedList = cards;
            for (let p in sorted) {
                if (sorted[p].toggle) {
                    sortedList = sortedList.filter((crd) =>
                        sorted[p].value.includes(crd[p])
                    );
                }
            }
            if (name !== "") {
                sortedList = sortedList.filter((crd) => {
                    if (crd.name.includes(name)) {
                        return true;
                    } else if (crd.name.toLowerCase().includes(name)) {
                        return true;
                    } else return crd.name.toUpperCase().includes(name);
                });
            }
            setSort(sortedList);
        };
        sortObject();
        return () => sortObject();
    }, [cards, sorted, name]);

    // const cardEles = cards.slice(0, itemLimit).map((player, index) => <Card key={index} data={player} />);

    let cardEles;

    if (sort.length !== 0) {
        cardEles = sort.slice(0, itemLimit).map((player, index) => <Card key={index} data={player} />);
    } else {
        cardEles = <h1>No cards in search</h1>;
    }

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
