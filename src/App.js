import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCards } from "./redux/reducers/setActions";

function App() {
    const dispatch = useDispatch();

    let style = {
        display: "flex",
        justifyContent: "center"
    };

    // https://www.balldontlie.io/api/v1/players?per_page=10
    // https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=237

    React.useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/players?per_page=100")
            .then((response) => response.json())
            .then((data) => dispatch(setCards(data.data)))
            .then(console.log("REQUESTED in App"))
            .catch(() => console.log("Error fetching API"));
    }, [dispatch]);

    return (
        <div className="App" style={style}>
            <Outlet />
        </div>
    );
}

export default App;
