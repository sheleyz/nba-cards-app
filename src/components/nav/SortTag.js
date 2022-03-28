import React from "react";
import { setSort } from "../../redux/reducers/setActions";
import { useDispatch } from "react-redux";

function SortTag(props) {
    const dispatch = useDispatch();

    const handleSort = (prop, value) => {
        dispatch(setSort(prop, value));
    };

    const numberCheck = (value) => {
        if (value === "C") {
            return <span>Center</span>;
        } else if (value === "PF") {
            return <span>Power Forward</span>;
        } else if (value === "SF") {
            return <span>Small Forward</span>;
        } else if (value === "PG") {
            return <span>Point Guard</span>;
        } else if (value === "SG") {
            return <span>Shooting Guard</span>;
        } else if (isNaN(value)) {
            return value.charAt(0).toUpperCase() + value.substring(1);
        } else {
            return value;
        }
    };

    return (
        <div className={"itm"} onClick={() => handleSort(props.prp, props.value)}>
            {props.prp === "set_name" ? props.value : numberCheck(props.value)} <button>X</button>
        </div>
    );
}

export default SortTag;
