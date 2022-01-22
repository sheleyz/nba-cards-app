import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/main/Home";
import About from "./components/main/About";

function App() {
    let style = {
        display: "flex",
        justifyContent: "center",
    };

    return (
        <BrowserRouter>
            <Nav />
            <div className="App" style={style}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
