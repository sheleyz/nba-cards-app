import React from "react";
import { clearOptions } from "../../redux/reducers/setActions";
import { useDispatch, useSelector } from "react-redux";
import Option from "./Option";

function Options() {
    const Options = useSelector((state) => state.options);
    const dispatch = useDispatch();

    let show;

    if (Options) {
        show = {
            display: "initial",
            right: "0px",
            top: "60px",
            backgroundColor: "#0b1b2c",
            color: "white",
            position: "fixed",
            height: "100%",
            width: "200px",
            overflowY: "scroll"
        };
    } else {
        show = {
            display: "none",
            backgroundColor: "#0b1b2c",
            color: "white",
            position: "fixed",
            top: "60px"
        };
    }

    let Sort = [
        {
            name: "Conference",
            type: "conference",
            values: ["East", "West"]
        },
        {
            name: "Division",
            type: "division",
            values: ["Atlantic", "Central", "Southeast", "Northwest", "Pacific", "Southwest"]
        },
        {
            name: "Team",
            type: "name",
            values: ["76ers", "Bucks", "Bulls", "Cavaliers", "Celtics", "Clippers", "Grizzlies", "Hawks", "Heat", "Hornets", "Jazz", "Kings", "Knicks", "Lakers", "Magic", "Mavericks", "Nets", "Nuggets", "Pacers", "Pelicans", "Pistons", "Raptors", "Rockets", "Spurs", "Suns", "Thunder", "Timberwolves", "Trail Blazers", "Warriors", "Wizards"]
        }
    ];

    let options = Sort.map((srt, idx) => <Option key={idx} opt={srt} />);

    return (
        <div className={"options"} style={show}>
            <div className={"top"} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{ color: "white", textAlign: "center" }}>Sort Cards </h1>
                <div onClick={() => dispatch(clearOptions())} className="buttonStyle">Clear Sort Options</div>
            </div>
            <div className={"wrapper"}>{options}</div>
        </div>
    );
}

export default Options;
