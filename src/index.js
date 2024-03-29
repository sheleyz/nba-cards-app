import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import Nav from "./components/nav/Nav";
import Home from "./components/main/Home";
import CardPage from "./components/card/CardPage";
import About from "./components/main/About";
import Footer from "./components/nav/Footer";
import Cards from "./components/main/Cards";
import Options from "./components/nav/Options";
import SortNav from "./components/nav/SortNav";

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Nav />
                <SortNav />
                <Options />
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="player" element={<Cards />}>
                            <Route path=":id" element={<CardPage />} />
                        </Route>
                        <Route path="about" element={<About />} />
                    </Route>
                </Routes>
                <Footer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
