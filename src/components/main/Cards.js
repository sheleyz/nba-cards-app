import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { increaseLimit } from "../../redux/reducers/setActions";
import { Link, Outlet } from "react-router-dom";

function Cards() {
    const dispatch = useDispatch();

    let wrapperStyle = {
        minHeight: "414px",
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "60px"
    };

    let buttonStyle = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    };

    let noCardsStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    const [sort, setSort] = React.useState([]);

    const itemLimit = useSelector(state => state.itemLimit);
    const cards = useSelector(state => state.cards);
    const sorted = useSelector(state => state.sorted);

    React.useEffect(() => {
        let sortObject = () => {
            let sortedList = cards;
            for (let p in sorted) {
                if (sorted[p].toggle) {
                    sortedList = sortedList.filter(crd =>
                        sorted.team[p].value.includes(crd.team[p])
                    );
                }
            }
            setSort(sortedList);
        };
        sortObject();
        return () => sortObject();
    }, [cards, sorted]);

    let cardEles;

    if (sort.length !== 0) {
        cardEles = sort.slice(0, itemLimit).map((player, index) => (
            <Link to={`/player/${player.id}`} key={index} style={{ textDecoration: "none" }}>
                <Card
                    first_name={player.first_name}
                    last_name={player.last_name}
                    team_name={player.team.full_name}
                    division={player.team.division}
                    conference={player.team.conference}
                />
            </Link>
        ));
    } else {
        cardEles = <div style={noCardsStyle}><h1>No cards found</h1></div>;
    }

    return (
        <div className="App">
            <div className="cardWrapper" style={wrapperStyle}>
                {cardEles}
            </div>
            <div style={buttonStyle}><div onClick={() => dispatch(increaseLimit())} className="buttonStyle">Load More</div></div>
            <Outlet />
        </div>
    );
}

export default Cards;
