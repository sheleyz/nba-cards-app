import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Footer from "./components/nav/Footer";

import { useDispatch } from "react-redux";
import { setCards } from "./redux/reducers/setActions";

function App() {
    const dispatch = useDispatch();

    let style = {
        display: "flex",
        justifyContent: "center",
    };

    React.useEffect(() => {
        fetch(
            "https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=237"
        )
            .then((response) => response.json())
            .then((data) => dispatch(setCards(data)))
            .catch(() => console.log("Error fetching API"));
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Nav />
            <div className="App" style={style}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
