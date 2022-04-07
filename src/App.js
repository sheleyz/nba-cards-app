import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCards } from "./redux/reducers/setActions";

function App() {
    const dispatch = useDispatch();

    let style = {
        display: "flex",
        justifyContent: "center",
    };

    // https://www.balldontlie.io/api/v1/players?per_page=10
    // https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=237

    React.useEffect(() => {
        let players = [];
        try {
            for (let i = 1; i <= 5; i++) {
                fetch(`https://www.balldontlie.io/api/v1/players?page=${i}&per_page=100`)
                    .then(response => response.json())
                    .then(data => {
                        let stringifiedData = JSON.stringify(data.data);
                        let parsedData = JSON.parse(stringifiedData);
                        parsedData.forEach(item => players.push(item));
                    })
                    .then(() => {
                        if (i >= 5) {
                            dispatch(setCards(players));
                            // console.log("Players:");
                            // console.log(players);
                        }
                    })
                    .then(() => console.log(`Fetched API ${i}`))
                    .catch(() => console.log("Error fetching API"));
            }
        } catch (error) {
            console.log("Error fetching API");
        }
    }, [dispatch]);

    return (
        <div className="App" style={style}>
            <Outlet />
        </div>
    );
}

export default App;
