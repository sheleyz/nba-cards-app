import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Card from "../card/Card";

function CardPage() {
    const params = useParams();

    let cardWrapperStyle = {
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#000000B2",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "black"
    };

    let closeButtonStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "40px",
        position: "fixed",
        top: "25px",
        right: "40px"
    };

    const cards = useSelector((state) => state.cards);
    const [card, setCard] = React.useState("");

    const [render, renderElement] = React.useState({
        crd: false,
        load: true,
        error: false
    });

    React.useEffect(() => {
        let handleStatusChange = (status) => {
            renderElement({
                crd: true,
                load: false,
                error: false
            });
            setCard(status);
        };

        let sortedList = cards;
        let card = sortedList.find((crd) => crd.id === Number(params.id));

        handleStatusChange(card);
    }, [cards, params]);

    return (
        <div style={cardWrapperStyle}>
            <Link to={"/"} style={closeButtonStyle}>
                <div>X</div>
            </Link>
            {render.crd && <Card first_name={card.first_name} last_name={card.last_name} team_name={card.team.full_name} division={card.team.division} conference={card.team.conference} />}
            {render.load && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
            {render.error && (
                <div>
                    <h1>Error Card. Please try again later.</h1>
                </div>
            )}
        </div>
    );
}

export default CardPage;
