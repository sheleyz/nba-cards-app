import React from "react";
import OptionItem from "./OptionItem";

function Option(props) {
    const [drop, toggleDrop] = React.useState(false);

    let shower;

    if (drop) {
        shower = {
            display: "initial",
            cursor: "pointer"
        };
    } else {
        shower = {
            display: "none"
        };
    }

    let values = props.option.values.map((option, index) => {
        return <OptionItem key={index} type={props.option.type} value={option} />;
    });

    return (
        <div className="option">
            <h3
                className="optionHeader"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => toggleDrop(!drop)}>
                {props.option.name}
                {!drop}
                {drop}
            </h3>
            <div className="optionList" style={shower}>
                {values}
            </div>
        </div>
    );
}

export default Option;
