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

    let values = props.opt.values.map((op, idx) => {
        return <OptionItem key={idx} type={props.opt.type} value={op} />;
    });

    return (
        <div className={"option"}>
            <h3
                className={"optHead"}
                style={{ color: "white" }}
                onClick={() => toggleDrop(!drop)}>
                {props.opt.name}
                {!drop}
                {drop}
            </h3>
            <div className={"listOpt"} style={shower}>
                {values}
            </div>
        </div>
    );
}

export default Option;
