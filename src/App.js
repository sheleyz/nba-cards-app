import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCards } from "./redux/reducers/setActions";

function App() {
    const dispatch = useDispatch();

    const [seconds, setSeconds] = React.useState(0);
    const [loadCards, setLoadCards] = React.useState("load");
    const [load, setLoad] = React.useState("load");

    let style = {
        display: "flex",
        justifyContent: "center"
    };

    let loadingMessageStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60px"
    };

    // https://www.balldontlie.io/api/v1/players?per_page=100 => 38 pages of 100 players each
    // https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=237

    React.useEffect(() => {
        let players = [];
        if (load === "load") {
            try {
                for (let i = 1; i <= 5; i++) {
                    fetch(`https://www.balldontlie.io/api/v1/players?page=${i}&per_page=100`)
                        .then((response) => response.json())
                        .then((data) => {
                            let stringifiedData = JSON.stringify(data.data);
                            let parsedData = JSON.parse(stringifiedData);
                            parsedData.forEach((item) => players.push(item));
                        })
                        .then(() => {
                            if (i >= 5) {
                                setLoadCards("loaded");
                                dispatch(setCards(players));
                            }
                        })
                        .then(() => console.log(`Fetched API ${i}`))
                        .catch(() => {
                            setLoadCards("error");
                            console.log("Error fetching API");
                        });
                }
            } catch (error) {
                console.log("Error fetching API");
            }
        }

        if (loadCards === "loaded") {
            setLoad("loaded");
        } else if (loadCards === "error") {
            setLoad("error");
        }

        let interval = null;

        interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 500);

        return () => clearInterval(interval);
    }, [seconds, loadCards, load, dispatch]);

    return (
        <div className="App" style={style}>
            {load === "loaded" && <Outlet />}
            {load === "load" && (
                <div style={loadingMessageStyle}>
                    <h1>Loading...</h1>
                </div>
            )}
            {load === "error" && (
                <div style={loadingMessageStyle}>
                    <h1>Error Loading API. Please try again later.</h1>
                </div>
            )}
        </div>
    );
}

export default App;
