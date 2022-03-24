import React from "react";
import OptionItem from "./OptionItem";

function Option(props) {
    const [drop, toggleDrop] = React.useState(false);

    let shower;

    if (drop) {
        shower = {
            minHeight: "" + 25 * props.opt.values.length + "px",
            maxHeight: "" + 25 * props.opt.values.length + "px"
        };
    } else {
        shower = {
            minHeight: "0px",
            maxHeight: "0px"
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
