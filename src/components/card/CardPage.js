import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setCard } from "../../redux/reducers/setActions";

function CardPage() {
    const params = useParams();
    const dispatch = useDispatch();

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
    }

    let cardStyle = {
        minHeight: "100px",
        width: "250px",
        backgroundColor: "orange",
        margin: "20px"
    };

    let closeButtonStyle = {
        textDecoration: "none",
        color: "white",
        fontSize: "40px",
        position: "fixed",
        top: "25px",
        right: "40px"
    }

    // https://www.balldontlie.io/api/v1/players/<ID>

    React.useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players/${params.id}`)
            .then((response) => response.json())
            .then((data) => dispatch(setCard(data)))
            .catch(() => console.log("Error fetching API"));
    }, [params, dispatch]);

    const card = useSelector((state) => state.card);
    // console.log(card.team.full_name);

    return (
        <div style={cardWrapperStyle}>
            <Link to={"/"} style={closeButtonStyle}><div>X</div></Link>
            <div style={cardStyle}>
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
                    {/* <h3>Team: {card.team.full_name}</h3> */}
                </div>
            </div>
        </div>
    );
}

export default CardPage;
