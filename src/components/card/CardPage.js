import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setCard } from "../../redux/reducers/setActions";

function CardPage() {
    const params = useParams();
    const dispatch = useDispatch();

    let cardStyle = {
        minHeight: "100px",
        width: "250px",
        backgroundColor: "orange",
        margin: "20px"
    };

    const card = useSelector((state) => state.card);

    // https://www.balldontlie.io/api/v1/players/<ID>

    React.useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players/${params.id}`)
            .then((response) => response.json())
            .then((data) => dispatch(setCard(data)))
            .then(console.log("REQUESTED in CardPage"))
            .catch(() => console.log("Error fetching API"));
    }, [params, dispatch]);

    return (
        <div style={cardStyle}>
            <Link to={"/"}>X</Link>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1585071258252-369a36d89e30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80"
                    alt="Player"
                    width="250px"
                    height="250px"
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div style={{ padding: "5px" }}>
                <h3>{card.first_name} {card.last_name}</h3>
                <h3>Position: {card.position}</h3>
                <h3>Team: {card.team.full_name}</h3>
            </div>
        </div>
    );
}

export default CardPage;
